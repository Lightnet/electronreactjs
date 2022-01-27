

// Modules to control application life and create native browser window
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const {app, BrowserWindow, session} = require('electron')
const path = require('path')
const nodemon = require('nodemon');

//import {app, BrowserWindow} from 'electron';
//import * as url from 'url';
//import * as path from 'path';

//const server = require('./server');
let scriptPath = path.join(__dirname, './src/server/server.js')
//const basePath = path.dirname(path.dirname(scriptPath));
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://localhost:3000')
  //mainWindow.loadURL('http://localhost:8080')


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

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