/*
  LICENSE: MIT
  Created by: Lightnet
*/

/*
  script security need to allow check file else warning...
*/

// https://stackoverflow.com/questions/64478489/i-added-a-content-security-policy-but-still-the-security-warning-appears
// https://stackoverflow.com/questions/37828758/electron-js-how-to-minimize-close-window-to-system-tray-and-restore-window-back
// https://dev.to/franamorim/tutorial-alarm-widget-with-electron-react-2-34dd
// https://livebook.manning.com/book/electron-in-action/chapter-9/25
// https://www.electronjs.org/docs/latest/tutorial/tray


// Modules to control application life and create native browser window
//process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const {
  app
  , BrowserWindow
  //, session
  , ipcMain 
  , Menu
  , Tray
} = require('electron')

const path = require('path')
const nodemon = require('nodemon');

const config = require('./config');
console.log(config);


//process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; //disable security , not recommand

//import {app, BrowserWindow} from 'electron';
//import * as url from 'url';
//import * as path from 'path';

//const server = require('./server');
let scriptPath = path.join(__dirname, './src/server/server.js')
//const basePath = path.dirname(path.dirname(scriptPath));
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon:path.join(__dirname, './tray01.png')
    , frame: false
    , width: 800
    , height: 600
    , webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://localhost:3000')
  //mainWindow.loadURL('http://localhost:8080')


  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}


let tray = null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // https://www.electronjs.org/docs/latest/api/dock
  //tray = new Tray('/path/to/my/icon')
  //if(app.dock)app.dock.hide();
  //app.dock.hide();

  tray = new Tray(path.join(__dirname, './tray01.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: '', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
    { label: 'Quit', click() { app.quit(); }}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)






  //server();
  // https://github.com/remy/nodemon/blob/HEAD/doc/requireable.md
  // https://github.com/remy/nodemon/blob/HEAD/doc/events.md#Using_nodemon_as_child_process
  nodemon({
      script: scriptPath
    , watch: [
      path.resolve(__dirname),
      //path.join(basePath, 'configs'),
      //path.join(basePath, 'package.json'),
    ]
    , env: { 'NODE_ENV': 'development' }
    , ext: 'js html'
  }).on('start', function () {
    console.log('App has started');
  }).on('crash', function () {
    console.log('script crashed for some reason');
  }).on('restart', () => {
    console.log('Scripts or config changed. Restarting everything.');
  }).on('quit', () => {
    console.log('K Thx Bye');
    process.exit();
  });

  // https://www.electronjs.org/docs/latest/api/ipc-main
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.reply('asynchronous-reply', 'pong')
  })
  
  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = 'pong'
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  /*
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['default-src \'none\'']
      }
    })
  })
  */


})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.