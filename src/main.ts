import { BrowserWindow } from 'electron';
import { IMainConfig } from './interface';

export default class Main {
    static mainWindow: Electron.BrowserWindow | null;
    static application: Electron.App;
    static BrowserWindow: typeof BrowserWindow;
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        Main.mainWindow = null;
    }

    private static onReady(config: IMainConfig) {
        Main.mainWindow = new Main.BrowserWindow({ width: config.width, height: config.height });
        Main.mainWindow
            .loadURL('file://' + __dirname + '/web/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow, config?: IMainConfig) {
        const defaultConfig: IMainConfig = config || { width: 800, height: 600 };
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', () => Main.onReady(defaultConfig));
    }
}