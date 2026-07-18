@echo off
chcp 65001 >nul
echo 🍩 DonutShopTsukino を起動中...

:: node_modulesがなければインストール（初回のみ）
if not exist "node_modules" (
    echo 初回セットアップ中...
    call npm install
)

:: VSCodeを開く
start "" code .

:: 開発サーバーを新しい窓（cmd）で起動する
echo 開発サーバーを起動しています...
start "" cmd /k "npm run dev"