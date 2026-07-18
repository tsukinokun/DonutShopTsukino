# ドーナツショップ つきの。— 記事プラットフォーム化プラン

英文法解説サイトを「記事量産に耐える構造」へ拡張する。記事は 導入→概念→例文→確認テスト→総括 の5セクション型。
例文に音声読み上げ、確認テスト正解でランク付きコレクション（金/銀/銅）を付与。記事は Composite ツリーで階層化。
セクションはブロック配列型で、どのセクションにもキャラクター会話（パッセージ）を挿入可能。

---

## 確定した設計判断

| 論点 | 決定 |
|------|------|
| 記事の持ち方 | 構造化データ（TypeScript）。Markdown/MDXは不採用 |
| 記事構成 | 5セクション固定: `intro` / `concept` / `examples` / `quiz` / `summary` |
| セクション中身 | **ブロック配列型**（本文/例文/会話パッセージ/カード群/箇条書き等を並べる） |
| 階層 | **Composite パターン**の `ContentNode` ツリー（category=内部ノード / article=葉）。深さ自由 |
| カテゴリのページ | 専用ページなし。一覧の見出し（グループ見出し）としてまとめる |
| ルーティング | `react-router-dom` を導入。**HashRouter**（現状の `#` 方式の延長。公開先の設定不要で壊れない） |
| URL | フラット slug（全記事で一意）。例 `/#/articles/first-pattern` |
| 音声読み上げ | Web Speech API（`speechSynthesis`）。追加ライブラリ・音声ファイル不要 |
| 確認テスト | 4択（選択式） |
| 報酬付与条件 | 満点=金 / 50%以上=銀 / 1問以上正解=銅 |
| 再挑戦時 | **最高ランクを保持**（降格しない） |
| 報酬の保存先 | `localStorage` |
| コレクション表示 | 専用の図鑑ページ（`/collection`）。未獲得はシルエット等 |
| 記事一覧の場所 | トップページ下部にカード一覧 + ハンバーガーメニュー内にもツリー表示 |
| キャラクター | データ登録（`characters.ts`）。会話ブロックは話者IDで参照 |
| デザイン | 既存のグラスモーフィズム世界観を維持（`index.css` のCSS変数を再利用） |

用語補足: **slug** = URL末尾の識別用の短い英字名（`/articles/<slug>` の `<slug>`）。

---

## データモデル（型定義）

新規: `src/content/types.ts`

```ts
// ---- Composite ツリー ----
export type ContentNode = CategoryNode | ArticleNode;

export interface CategoryNode {
  kind: 'category';
  id: string;
  title: string;          // 例: 「文型」
  description?: string;
  children: ContentNode[];
}

export interface ArticleNode {
  kind: 'article';
  id: string;
  slug: string;           // 全体で一意。URLに使用
  title: string;          // 例: 「第一文型」
  summary?: string;       // 一覧カード用の短い説明
  sections: ArticleSection;
  quiz: Quiz;
  rewardId: string;       // このテストで得られるコレクションID
}

// ---- 5セクション（各セクションはブロック配列） ----
export interface ArticleSection {
  intro: Block[];
  concept: Block[];
  examples: Block[];
  quiz: Block[];          // テスト前の説明ブロック（テスト本体は quiz プロパティ）
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
  choices: string[];      // 4件
  answerIndex: number;    // 0..3
  explanation?: string;
}

// ---- キャラクター ----
export interface Character {
  id: string;
  name: string;
  avatar: string;         // import した画像URL
  side?: 'left' | 'right';
}

// ---- コレクション/報酬 ----
export type RewardRank = 'gold' | 'silver' | 'bronze';
export interface RewardDef {
  id: string;             // rewardId と対応
  name: string;
  icon: string;           // ドーナツ画像など
  description?: string;
}
```

コンテンツ本体（新規）:
- `src/content/tree.ts` — `export const contentTree: ContentNode[]`（ルート配列）。既存 `BeVerbArticle` の内容を最初の `ArticleNode` として移植
- `src/content/characters.ts` — `Record<string, Character>`
- `src/content/rewards.ts` — `RewardDef[]`（各記事の rewardId と対応）

---

## ルーティング設計

`react-router-dom` を導入。`src/main.tsx` を **`HashRouter`** でラップ（現状の `#top` と同じハッシュ方式の延長。公開先を問わず設定不要で動作）。
実URLは `http://<host>/#/`, `/#/articles/:slug`, `/#/collection` の形になる。下表のパスは `#/` 以降の論理パス。

| パス | 画面 |
|------|------|
| `/` | トップ（LogoHero + 記事ツリー一覧カード） |
| `/articles/:slug` | 記事詳細（5セクション + テスト + 結果演出） |
| `/collection` | コレクション図鑑 |
| `*` | 404（トップへ誘導） |

- 既存のハッシュ分岐（`App.tsx` の `#be-verb-guide` 判定）は削除し、HashRouter に置き換える。
- 旧URL `#be-verb-guide` を踏んだ場合の後方互換は不要（現状フロントのみ・公開前想定）。必要なら軽いリダイレクトを後追い可。
- 将来きれいなURL（`#` なし）にしたくなったら、公開先で SPA フォールバックを設定のうえ `BrowserRouter` へ変更（変更は `main.tsx` 中心の小規模）。

---

## localStorage 永続化

新規: `src/lib/collectionStore.ts`

- キー: `tsukino.collection.v1`
- 形: `Record<rewardId, RewardRank>`（最高ランクのみ保持）
- API:
  - `getCollection(): Record<string, RewardRank>`
  - `getRank(rewardId): RewardRank | null`
  - `awardRank(rewardId, rank)`: 既存より上位のときだけ更新（gold>silver>bronze）
  - `rankFromScore(correct, total): RewardRank | null`（満点=gold / >=50%=silver / >=1=bronze / 0=null）
- JSON parse 失敗時は空オブジェクトにフォールバック（try/catch）。

React連携: `useCollection()` フック（`useSyncExternalStore` もしくは `useState`+イベント）で図鑑・記事結果を同期。

---

## 音声読み上げ

新規: `src/lib/speech.ts`

- `speak(text: string, lang = 'en-US')`: `window.speechSynthesis` で発話。呼び出し前に `cancel()` して多重再生を防止。
- 非対応ブラウザ/`speechSynthesis` 未定義時はボタンを無効化（`isSpeechSupported()`）。
- `example` ブロックの `speakable` が true のとき、例文横に🔊ボタンを表示し `en` を読み上げ。

---

## コンポーネント構成（新規/変更）

新規:
- `src/components/blocks/BlockRenderer.tsx` — `Block[]` を受け取り type で分岐描画（Composite の描画側）
- `src/components/blocks/ExampleBlock.tsx` — 例文＋🔊ボタン
- `src/components/blocks/PassageBlock.tsx` — 会話UI（アバター＋吹き出し、話者IDで `characters` 参照）
- `src/components/blocks/CardsBlock.tsx` — 既存 be-verb-card スタイルを流用
- `src/components/Quiz.tsx` — 4択出題、採点、`rankFromScore`→`awardRank`、結果演出（獲得ランク表示）
- `src/pages/HomePage.tsx` — LogoHero + `ArticleTree` 一覧
- `src/pages/ArticlePage.tsx` — `useParams` で slug→ArticleNode 解決、記事タイトル上部に `Breadcrumb` を表示、5セクション順に描画 + Quiz
- `src/pages/CollectionPage.tsx` — 図鑑（rewards を金銀銅バッジ付きで一覧、未獲得はシルエット）
- `src/components/ArticleTree.tsx` — `ContentNode[]` を再帰描画（カテゴリ=見出し、記事=リンクカード）
- `src/components/Breadcrumb.tsx` — パンくずリスト。`ホーム > 全祖先カテゴリ > 記事` を表示。ホームのみ `Link`、中間カテゴリ（専用ページなし）は非リンクのテキスト、末尾の現在記事は `aria-current="page"` の非リンク。区切りは装飾（`aria-hidden`）
- `src/lib/contentIndex.ts` — ツリーを走査し `slug -> ArticleNode` の Map と、**パンくず解決 `getBreadcrumb(slug): { title: string }[]`**（ルートから対象記事までの祖先カテゴリ列＋記事自身）を提供

変更:
- `src/main.tsx` — `HashRouter` 追加
- `src/App.tsx` — ハッシュ分岐を削除、`<Routes>` に置換。背景・app-shell は維持
- `src/components/Header.tsx` — ダミー `メニュー1/2/3` を `ArticleTree`（ツリー）＋「コレクション」リンクに置換。`react-router` の `Link` 使用
- `src/components/BeVerbArticle.tsx` / `.css` — 内容を `tree.ts` の最初の記事へ移植。移植確認後にコンポーネントは削除（CSSのカード等スタイルは blocks 側へ移設）
- `src/components/DonutMenu.tsx` — 未使用。削除（内容の一部はコレクション図鑑の着想として流用可）

---

## デザイン方針

- `index.css` の既存CSS変数（`--accent`, `--shadow`, `--text-h`, `--border` 等）とグラスモーフィズム（`rgba` 背景 + `backdrop-filter: blur`）を全新規コンポーネントで踏襲。
- 会話ブロック: 左右振り分けの吹き出し。左=`side:'left'`（アバター左・吹き出し右）、右=逆。角丸＋半透明背景＋blur。
- 図鑑: グリッド。金=ゴールド枠、銀=シルバー枠、銅=ブロンズ枠、未獲得=グレースケール＋鍵アイコン。
- パンくず: 記事タイトル直上に横並び。半透明ピル or 軽いテキスト。区切り記号は装飾（`aria-hidden`）。`<nav aria-label="パンくず">` でラップし、末尾は `aria-current="page"`。狭幅では折り返し可・左端の祖先を省略しない（横スクロール許容）。
- ダークモード対応（既存 `prefers-color-scheme` 変数がそのまま効くよう変数ベースで書く）。

---

## 実装タスク（順序）

1. `react-router-dom` を依存追加（`npm i react-router-dom`）。
2. `src/content/types.ts` を作成（上記型）。
3. `src/content/characters.ts`・`rewards.ts` を最小データで作成。
4. `src/content/tree.ts` を作成し、既存 BeVerbArticle を最初の記事として移植（quiz・rewardId 付与）。カテゴリ例「文型」も1つ用意。
5. `src/lib/contentIndex.ts`（slug 解決 / パンくず `getBreadcrumb`）を作成。
6. `src/lib/collectionStore.ts` + `useCollection` フックを作成。
7. `src/lib/speech.ts` を作成。
8. `blocks/` 配下（BlockRenderer, ExampleBlock, PassageBlock, CardsBlock）を作成。
9. `Quiz.tsx`（採点・報酬付与・結果演出）を作成。
10. `pages/`（HomePage, ArticlePage, CollectionPage）を作成。
11. `ArticleTree.tsx`・`Breadcrumb.tsx` を作成し、`ArticlePage` にパンくずを組み込む。
12. `main.tsx` を `HashRouter` 化、`App.tsx` を `Routes` 化。
13. `Header.tsx` をツリー＋コレクションリンクに置換。
14. 旧 `BeVerbArticle.*` / `DonutMenu.tsx` を削除、関連 import を整理。
15. `npm run lint` と `npm run build` を通す。

---

## 検証

- `npm run dev` で以下を手動確認:
  - `/` にツリー一覧が出る。カテゴリが見出し、記事がカードで表示。
  - 記事カード→ `/articles/:slug` 遷移。5セクションが順に表示。
  - 記事上部にパンくず `ホーム > 祖先カテゴリ… > 記事` が表示され、多階層カテゴリの祖先が全て並ぶ。ホームはリンクで遷移でき、中間カテゴリは非リンク、末尾は現在記事（非リンク）。
  - 例文の🔊ボタンで英文が読み上げられる（対応ブラウザ）。非対応時はボタン無効。
  - 会話ブロックがアバター＋吹き出しで表示され、話者データが反映される。
  - 4択テスト: 満点=金 / 50%以上=銀 / 1問正解=銅 / 0問=付与なし、を各パターンで確認。
  - `/collection` に獲得ランクが反映。未獲得はシルエット。
  - 同じテストを低スコアで再挑戦してもランクが降格しない（最高保持）。
  - リロード後も localStorage からコレクションが復元される。
  - ハンバーガーメニューからツリー/コレクションに遷移できる。
- `npm run lint` エラーなし。`npm run build`（`tsc -b` 型チェック含む）成功。
- ダークモード（OS設定）で配色が破綻しない。

---

## リスク / 留意点

- **Web Speech API のブラウザ差**: 音声・言語の有無は端末依存。未対応時は機能を隠す/無効化してフォールバック。
- **ルーティングは HashRouter で確定**: URLに `#` が入る（`/#/articles/xxx`）が、公開先を問わず設定不要で直リンクも壊れない。きれいなURLが必要になったら将来 `BrowserRouter`＋SPAフォールバックへ移行可。
- **slug 一意性**: `tree.ts` 追加時に slug 重複しないルール。`contentIndex` 構築時に重複検知して開発時に警告すると安全。
- **localStorage 無効環境**（プライベートモード等）: 例外を握りつぶしセッション内のみ動作にフォールバック。

## 未解決（実装時に確認可・現状は既定で進行）
- 会話ブロックの立ち絵/アバター画像の用意（既定: 既存 logo.png を仮アバターに）。
