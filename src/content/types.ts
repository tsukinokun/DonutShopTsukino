// ---- Composite ツリー ----
export type ContentNode = CategoryNode | ArticleNode;

export interface CategoryNode {
  kind: 'category';
  id: string;
  title: string; // 例: 「文型」
  description?: string;
  children: ContentNode[];
}

export interface ArticleNode {
  kind: 'article';
  id: string;
  slug: string; // 全体で一意。URLに使用
  title: string; // 例: 「第一文型」
  summary?: string; // 一覧カード用の短い説明
  sections: ArticleSection;
  quiz: Quiz;
  rewardId: string; // このテストで得られるコレクションID
}

// ---- 5セクション（各セクションはブロック配列） ----
export interface ArticleSection {
  intro: Block[];
  concept: Block[];
  examples: Block[];
  quiz: Block[]; // テスト前の説明ブロック（テスト本体は quiz プロパティ）
  summary: Block[];
}

// ---- ブロック（判別可能ユニオン） ----
export type Block =
  | { type: 'text'; text: string }
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'list'; items: string[] }
  | { type: 'cards'; cards: { label: string; title: string; note: string }[] }
  | { type: 'example'; en: string; ja?: string; speakable?: boolean } // 音声読み上げ対象
  | { type: 'passage'; lines: { speakerId: string; text: string }[] }; // 会話

// ---- 確認テスト ----
export interface Quiz {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: string[]; // 4件
  answerIndex: number; // 0..3
  explanation?: string;
}

// ---- キャラクター ----
export interface Character {
  id: string;
  name: string;
  avatar: string; // import した画像URL
  side?: 'left' | 'right';
}

// ---- コレクション/報酬 ----
export type RewardRank = 'gold' | 'silver' | 'bronze';

export interface RewardDef {
  id: string; // rewardId と対応
  name: string;
  icon: string; // ドーナツ画像など
  description?: string;
}

// セクションの並び順（記事ページで固定順に描画するため）
export const SECTION_ORDER: (keyof ArticleSection)[] = [
  'intro',
  'concept',
  'examples',
  'quiz',
  'summary',
];

export const SECTION_LABELS: Record<keyof ArticleSection, string> = {
  intro: '導入',
  concept: '概念説明',
  examples: '例文',
  quiz: '確認テスト',
  summary: '総括',
};
