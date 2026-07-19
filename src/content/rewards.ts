import type { RewardDef, RewardRank } from './types';
import logo from '../assets/images/logo.png';

// ランク表示ラベル（金/銀/銅）。Quiz・図鑑で共有し、表記のドリフトを防ぐ。
export const RANK_LABEL: Record<RewardRank, string> = {
  gold: '金',
  silver: '銀',
  bronze: '銅',
};

// 各記事の rewardId と対応するコレクション定義。
export const rewards: RewardDef[] = [
  {
    id: 'reward-pronoun',
    name: '代名詞ドーナツ',
    icon: logo,
    description: '代名詞の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-be-verb',
    name: 'Be動詞ドーナツ',
    icon: logo,
    description: 'Be動詞の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-general-verb',
    name: '一般動詞ドーナツ',
    icon: logo,
    description: '一般動詞の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-imperative',
    name: '命令系ドーナツ',
    icon: logo,
    description: '命令系の確認テストで手に入る、まあるいドーナツ。',
  },
];

export function getReward(id: string): RewardDef | undefined {
  return rewards.find((r) => r.id === id);
}
