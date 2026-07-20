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
  {
    id: 'reward-auxiliary',
    name: '助動詞ドーナツ',
    icon: logo,
    description: '助動詞の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-plural-noun',
    name: '複数形ドーナツ',
    icon: logo,
    description: '名詞の複数形の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-question-word',
    name: '疑問詞ドーナツ',
    icon: logo,
    description: '疑問詞の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-present-progressive',
    name: '現在進行形ドーナツ',
    icon: logo,
    description: '現在進行形の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-past-tense',
    name: '過去形ドーナツ',
    icon: logo,
    description: '過去形の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-past-irregular',
    name: '不規則変化ドーナツ',
    icon: logo,
    description: '過去形(不規則変化)の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-there',
    name: 'There構文ドーナツ',
    icon: logo,
    description: 'There構文の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-past-progressive',
    name: '過去進行形ドーナツ',
    icon: logo,
    description: '過去進行形の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-future',
    name: '未来形ドーナツ',
    icon: logo,
    description: '未来形の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-auxiliary-have-to-may',
    name: '助動詞(have to/may)ドーナツ',
    icon: logo,
    description: '助動詞(have to/may)の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-infinitive',
    name: '不定詞ドーナツ',
    icon: logo,
    description: '不定詞の確認テストで手に入る、まあるいドーナツ。',
  },
  {
    id: 'reward-gerund',
    name: '動名詞ドーナツ',
    icon: logo,
    description: '動名詞の確認テストで手に入る、まあるいドーナツ。',
  },
];

export function getReward(id: string): RewardDef | undefined {
  return rewards.find((r) => r.id === id);
}
