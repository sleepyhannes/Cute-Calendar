const { app, BrowserWindow } = require("electron");
function createWindow() {
    const win = new BrowserWindow({
        width: 292,
        height: 430,
        frame: false,
        transparent: true,
        resizable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile("index.html");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});