@echo off
setlocal
set "APP_DIR=%~dp0"
set "PY=C:\Users\cooldou\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PY%" set "PY=python"
pushd "%APP_DIR%"

for /f "usebackq tokens=*" %%i in (`powershell -NoProfile -Command "Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } | Select-Object -First 1 -ExpandProperty IPAddress"`) do set "LOCAL_IP=%%i"

echo.
echo Prague Trip Planner mobile server
echo.
echo Open on this computer:
echo   http://127.0.0.1:8765/index.html
echo.
if defined LOCAL_IP (
  echo Open on your phone while connected to the same Wi-Fi:
  echo   http://%LOCAL_IP%:8765/index.html
) else (
  echo Could not detect your local IP. Run ipconfig and use your IPv4 address:
  echo   http://YOUR_IPV4:8765/index.html
)
echo.
echo Keep this window open while using the app. If Windows Firewall asks, allow Python on private networks.
echo.
"%PY%" -m http.server 8765 --bind 0.0.0.0
popd
endlocal
