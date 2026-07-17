@echo off
chcp 65001 >nul
echo DonutShopTsukino を起動中...

:: node_modulesがなければインストール
if not exist "node_modules" (
    echo 初回セットアップ中...
    call npm install
)

:: VSCodeを開く
code .

:: 開発サーバーを起動
call npm run dev