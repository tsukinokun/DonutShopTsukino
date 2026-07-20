@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo === DonutShopTsukino GitHub Pages Deploy ===

REM 1. Guard: abort if working tree is dirty
git status --porcelain > status.tmp
set /p DIRTY=<status.tmp
del status.tmp
if not "%DIRTY%"=="" (
  echo ERROR: 未コミットの変更があります。デプロイ前にコミットまたはスタッシュしてください。
  git status --short
  exit /b 1
)

REM 2. Build
echo === Building... ===
call npm.cmd run build
if errorlevel 1 (
  echo ERROR: ビルドに失敗しました。
  exit /b 1
)

REM 3. SPA fallback: copy index.html to 404.html
copy /Y dist\index.html dist\404.html

REM 4. Deploy dist to gh-pages branch via orphan branch
echo === Pushing dist to gh-pages... ===
git checkout --orphan gh-pages
if errorlevel 1 (
  echo ERROR: gh-pages ブランチの作成に失敗しました。
  git checkout main
  exit /b 1
)
git add -f dist
git commit -m "Deploy to GitHub Pages" || (
  echo ERROR: コミットに失敗しました。
  git checkout main
  exit /b 1
)
git push -f origin gh-pages
if errorlevel 1 (
  echo ERROR: gh-pages へのプッシュに失敗しました。
  git checkout main
  exit /b 1
)
git checkout main

echo === Done. https://tsukinokun.github.io/DonutShopTsukino/ ===
echo 注意: GitHub で Settings -^> Pages -^> Source = gh-pages / (root) を設定してください（初回のみ）。
endlocal
