# GitHub Pages デプロイ計画（DonutShopTsukino）

## 目標
`tsukinokun/DonutShopTsukino` リポジトリの **main** ブランチから、`gh-pages` ブランチへ静的ビルド成果物をデプロイし、GitHub Pages で公開する。公開URLはサブパス形 `https://tsukinokun.github.io/DonutShopTsukino/`。

## 前提・確認済み事実
- リポジトリ remote は `https://github.com/tsukinokun/DonutShopTsukino.git`、ブランチ `main`（既存）。
- ルーティングは `HashRouter` を使用中（`src/main.tsx:3,9`）。ハッシュ以降がルーティングされるため、サブパス配下でも `/articles/:slug` 等はそのまま動作する。**basename の追加は不要。**
- ビルド成果物は `dist/`（vite default）。
- SPA なので、直接アクセス時も `index.html` を返す必要がある（gh-pages ブランチ方式では 404.html コピーで対応）。

## やること（順序付きタスクリスト）

### 1. vite.config.ts に base を設定
`src/vite.config.ts` を以下のように変更し、サブパス配下でアセット（JS/CSS/画像）を正しく解決する。
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DonutShopTsukino/',
})
```
（これにより `dist/index.html` の asset パスが `/DonutShopTsukino/assets/...` になる。）

### 2. index.html の favicon パスをビルド出力に合わせる
現在 `index.html:5` は `href="src/assets/images/logo.png"`（開発用ソースパスで、本番では解決されない）。
ビルド時に正しく出力されるよう `public/` へロゴを配置するか、import 済みアセットを使う形にする。
- 簡易案：`src/assets/images/logo.png` を `public/favicon.png`（または既存 `public/favicon.svg`）として参照し、`href` を `/DonutShopTsukino/favicon.png` にする。
- 余裕があれば App 内の `import bgImage` と同様に `index.html` を Vite に処理させる（今回は最小変更で public 配置案）。

### 3. SPA 用 404.html を出力
`HashRouter` のため厳密には不要だが、gh-pages ブランチ方式の定石として `dist/404.html` に `index.html` のコピーを置く。bat スクリプト内で `copy dist\index.html dist\404.html` とする。

### 4. デプロイ用 bat ファイルを作成
リポジトリルートに `deploy.bat` を作成（PowerShell ではなく cmd 互換の bat を希望通り作成）。
動作概要：
1. `npm run build` で `dist/` を生成。
2. `dist\404.html` を `index.html` からコピー。
3. 一時作業用に `dist` を gh-pages ブランチへコミット＆プッシュ。
   - 推奨：`git worktree` を使わず、以下の簡易手順：
     - `git branch -D gh-pages` を安全にスキップし、`git subtree push --prefix dist origin gh-pages` を使用（dist のみを gh-pages ブランチにプッシュ）。
   - `subtree` が使えない環境なら代替：`gh-pages` 用に `dist` を `git add -f` してコミットし、orphan ブランチへプッシュ（bat 内で `git checkout --orphan gh-pages` → `git add -f dist` → `git commit` → `git push -f origin gh-pages` → `git checkout main`）。

### 5. GitHub リポジトリ設定（手動、1回のみ）
- Repository → Settings → Pages → Source = **Deploy from a branch**、Branch = **gh-pages** / **/ (root)** を選択して Save。
- 数分後に `https://tsukinokun.github.io/DonutShopTsukino/` で公開。

## エッジケース・注意
- `main` に未コミットの変更があると build は動くが push に巻き込まれる恐れ。bat 先頭で `git status --porcelain` をチェックし、未コミットがあれば中断するガードを入れる。
- localStorage ベースのコレクションストアはページごとに独立。Pages 上でも動作するが、別ドメイン/サブパスでキーは同じ `tsukino.collection.v1` なので問題なし。
- 画像アセット（logo/background）は import 経由でバンドルされるため base 設定のみで解決。public/favicon.svg 等も base を付与。

## 検証手順
1. `npm run build` が成功し、`dist/index.html` の asset パスが `/DonutShopTsukino/...` になっていることを確認。
2. `npm run preview` でローカル確認（prefix は preview も base を反映）。
3. `deploy.bat` 実行後、GitHub Pages の URL にアクセスし、トップ・記事ページ・コレクションが表示されることを確認。
4. 記事内リンク（パンくず・ヘッダー）がサブパス配下で破綻しないことを確認（HashRouter のため影響なし、念のため目視）。

## 未解決・要確認
- `git subtree` が利用可能か（Git for Windows の標準には含まれるが環境次第）。不可なら orphan ブランチ方式に切り替え。
- favicon は public 配置案で良いか（App と同様に import で統一したい場合は別途対応）。
