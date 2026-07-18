import { useSyncExternalStore } from 'react';
import type { RewardRank } from '../content/types';

const STORAGE_KEY = 'tsukino.collection.v1';

const RANK_ORDER: Record<RewardRank, number> = {
  bronze: 1,
  silver: 2,
  gold: 3,
};

type CollectionMap = Record<string, RewardRank>;

// メモリ内キャッシュ（localStorage 無効環境でもセッション内は動作させる）。
let cache: CollectionMap | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): CollectionMap {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === 'object') {
      return parsed as CollectionMap;
    }
    return {};
  } catch {
    return {};
  }
}

function ensureCache(): CollectionMap {
  if (cache === null) {
    cache = readFromStorage();
  }
  return cache;
}

function persist(map: CollectionMap): void {
  cache = map;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // localStorage 無効環境: セッション内キャッシュのみで継続。
  }
  listeners.forEach((l) => l());
}

export function getCollection(): CollectionMap {
  return { ...ensureCache() };
}

export function getRank(rewardId: string): RewardRank | null {
  return ensureCache()[rewardId] ?? null;
}

// 既存より上位のときだけ更新（最高ランクを保持）。
export function awardRank(rewardId: string, rank: RewardRank): void {
  const current = ensureCache();
  const existing = current[rewardId];
  if (existing && RANK_ORDER[existing] >= RANK_ORDER[rank]) {
    return;
  }
  persist({ ...current, [rewardId]: rank });
}

// 満点=gold / >=50%=silver / >=1=bronze / 0=null
export function rankFromScore(correct: number, total: number): RewardRank | null {
  if (total <= 0 || correct <= 0) return null;
  if (correct >= total) return 'gold';
  if (correct * 2 >= total) return 'silver';
  return 'bronze';
}

// ---- React 連携 ----
function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): CollectionMap {
  return ensureCache();
}

export function useCollection(): CollectionMap {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
