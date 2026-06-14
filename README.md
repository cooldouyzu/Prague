# 布拉格互動行程 App

這是一個可直接部署到 GitHub Pages 的靜態 PWA App，不需要後端、資料庫或 build step。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的 repository。
2. 將 `interactive-prague-app` 資料夾內的所有檔案上傳到 repository 根目錄。
3. 到 repository 的 `Settings` -> `Pages`。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`，按 `Save`。
6. 等 GitHub Pages 完成部署後，用手機開啟 GitHub 提供的 HTTPS 網址。
7. 手機瀏覽器選「加入主畫面」即可像 App 一樣開啟。

## 使用方式

- 點選天數切換每日行程。
- 點選景點查看交通、預約、備註與座標。
- 按「新增」可以加入自訂景點。
- 景點詳細卡片可按「修改此行程」更新內容。
- 修改與新增資料會儲存在該裝置的瀏覽器 localStorage。

## 離線與地圖

第一次透過 HTTPS 成功開啟後，App 本體會被 service worker 快取。離線時外部地圖圖磚可能無法載入，App 會改用本機示意地圖，仍可查看、點選與編輯景點。
