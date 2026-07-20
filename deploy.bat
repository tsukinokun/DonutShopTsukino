@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo === DonutShopTsukino GitHub Pages Deploy ===

REM 1. Guard: abort if working tree is dirty
git diff --quiet || (
  echo ERROR: Uncommitted changes detected. Commit or stash before deploying.
  git status --short
  exit /b 1
)

REM 2. Build
echo === Building... ===
call npm.cmd run build
if errorlevel 1 (
  echo ERROR: Build failed.
  exit /b 1
)

if not exist "dist\index.html" (
  echo ERROR: dist/index.html not found. Check build output.
  exit /b 1
)

REM 3. SPA fallback: copy index.html to 404.html
copy /Y dist\index.html dist\404.html

REM 4. Deploy dist to gh-pages branch via orphan branch
echo === Pushing dist to gh-pages... ===
git checkout --orphan gh-pages
if errorlevel 1 (
  echo ERROR: Failed to create gh-pages branch.
  git checkout create-github-pages-deploy-bat
  exit /b 1
)
git add -f dist
git commit -m "Deploy to GitHub Pages" || (
  echo ERROR: Commit failed.
  git checkout create-github-pages-deploy-bat
  exit /b 1
)
git push -f origin gh-pages
if errorlevel 1 (
  echo ERROR: Failed to push to gh-pages.
  git checkout create-github-pages-deploy-bat
  exit /b 1
)
git checkout create-github-pages-deploy-bat

echo === Done. https://tsukinokun.github.io/DonutShopTsukino/ ===
echo NOTE: Set GitHub Pages source to gh-pages branch in repo settings (first time only).
endlocal
