$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

Write-Host '=== DonutShopTsukino GitHub Pages Deploy ==='

# 1. Guard: abort if working tree is dirty
$dirty = git diff --quiet
if ($LASTEXITCODE -ne 0) {
  Write-Host 'ERROR: Uncommitted changes detected. Commit or stash before deploying.'
  git status --short
  exit 1
}

# 2. Build
Write-Host '=== Building... ==='
& npm.cmd run build
if ($LASTEXITCODE -ne 0) {
  Write-Host 'ERROR: Build failed.'
  exit 1
}

if (-not (Test-Path -LiteralPath 'dist/index.html')) {
  Write-Host 'ERROR: dist/index.html not found. Check build output.'
  exit 1
}

# 3. SPA fallback
Copy-Item -LiteralPath 'dist/index.html' -Destination 'dist/404.html' -Force

# 3.5 Backup deploy files so they survive cleanup
if (Test-Path -LiteralPath '_temp_deploy') { Remove-Item -Recurse -Force '_temp_deploy' }
New-Item -ItemType Directory -LiteralPath '_temp_deploy' | Out-Null
Copy-Item -LiteralPath 'deploy.bat' -Destination '_temp_deploy/deploy.bat' -Force
Copy-Item -LiteralPath 'deploy.ps1' -Destination '_temp_deploy/deploy.ps1' -Force

# 4. Deploy dist to gh-pages branch
Write-Host '=== Pushing dist to gh-pages... ==='
git branch -D gh-pages 2>$null
git checkout --orphan gh-pages

# clean working tree (keep .git)
Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force

# dist の中身をルートへ
Copy-Item -LiteralPath 'dist/*' -Destination './' -Recurse -Force

# restore deploy files
Copy-Item -LiteralPath '_temp_deploy/deploy.bat' -Destination './deploy.bat' -Force
Copy-Item -LiteralPath '_temp_deploy/deploy.ps1' -Destination './deploy.ps1' -Force
Remove-Item -Recurse -Force '_temp_deploy'

git add -A
git commit -m 'Deploy to GitHub Pages'
if ($LASTEXITCODE -ne 0) {
  Write-Host 'ERROR: Commit failed.'
  git checkout main
  exit 1
}

git push -f origin gh-pages
if ($LASTEXITCODE -ne 0) {
  Write-Host 'ERROR: Failed to push to gh-pages.'
  git checkout main
  exit 1
}

git checkout main

Write-Host '=== Done. https://tsukinokun.github.io/DonutShopTsukino/ ==='
Write-Host 'NOTE: Set GitHub Pages source to gh-pages branch in repo settings (first time only).'
