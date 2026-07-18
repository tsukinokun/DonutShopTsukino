@echo off
chcp 65001 >nul
echo 🍩 DonutShopTsukino を起動中...

:: npmのチェック
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [エラー] npmが見つかりません。Node.jsをインストールしてください。
    pause
    exit /b
)

:: node_modulesがなければインストール
if not exist "node_modules" (
    echo 初回セットアップ中...
    call npm install
)

:: VSCodeの場所を自動検索
set "VSCODE_CMD="
for /f "delims=" %%i in ('where code 2^>nul') do set "VSCODE_CMD=%%i"

:: VSCodeが見つかれば起動
if defined VSCODE_CMD (
    start "" "%VSCODE_CMD%" .
) else (
    echo [警告] VSCodeが見つかりません。エディタを手動で開いてください。
)

:: 開発サーバーを起動
echo 開発サーバーを起動しています...
start "" cmd /k "npm run dev"

:: ブラウザを開く（少し待機）
timeout /t 5 >nul
start "" http://localhost:5173