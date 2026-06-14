@echo off
setlocal
set "APP_DIR=%~dp0"
set "PY=C:\Users\cooldou\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PY%" set "PY=python"
pushd "%APP_DIR%"

start "Prague Itinerary App Server" /min "%PY%" -m http.server 8765 --bind 127.0.0.1
timeout /t 2 >nul
start "" "http://127.0.0.1:8765/index.html"
popd
endlocal
