@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

set "DEPLOY_CONT=%TEMP%\deploy_cont_%RANDOM%.bat"
copy /Y "%~f0" "%DEPLOY_CONT%" >nul

echo === DonutShopTsukino GitHub Pages Deploy ===

REM 1. Guard: abort if working tree is dirty
git diff --quiet || (
  echo ERROR: Uncommitted changes detected. Commit or stash before deploying.
  git status --short
  del "%DEPLOY_CONT%" >nul 2>&1
  exit /b 1
)

REM 2. Build
echo === Building... ===
call npm.cmd run build
if errorlevel 1 (
  echo ERROR: Build failed.
  del "%DEPLOY_CONT%" >nul 2>&1
  exit /b 1
)

if not exist "dist\index.html" (
  echo ERROR: dist/index.html not found. Check build output.
  del "%DEPLOY_CONT%" >nul 2>&1
  exit /b 1
)

REM 3. SPA fallback: copy index.html to 404.html
copy /Y dist\index.html dist\404.html

REM 4. Deploy dist to gh-pages branch
echo === Pushing dist to gh-pages... ===
git show-ref --verify --quiet refs/heads/gh-pages
if errorlevel 1 (
  git checkout --orphan gh-pages
) else (
  git checkout gh-pages
  git rm -rf .
)

git add -f dist
git commit -m "Deploy to GitHub Pages" || (
  echo ERROR: Commit failed.
  git checkout main
  del "%DEPLOY_CONT%" >nul 2>&1
  exit /b 1
)
git push -f origin gh-pages
if errorlevel 1 (
  echo ERROR: Failed to push to gh-pages.
  git checkout main
  del "%DEPLOY_CONT%" >nul 2>&1
  exit /b 1
)
git checkout main

echo === Done. https://tsukinokun.github.io/DonutShopTsukino/ ===
echo NOTE: Set GitHub Pages source to gh-pages branch in repo settings (first time only).
del "%DEPLOY_CONT%" >nul 2>&1
endlocal
