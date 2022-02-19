/*
  LICENSE: MIT
  Created by: Lightnet
*/

// https://www.electronjs.org/docs/latest/api/ipc-renderer
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

const { ipcRenderer } = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  //const replaceText = (selector, text) => {
    //const element = document.getElementById(selector)
    //if (element) element.innerText = text
  //}

  //for (const type of ['chrome', 'node', 'electron']) {
    //replaceText(`${type}-version`, process.versions[type])
  //}

  window.addEventListener('calleletron', () => {
    ipcRenderer.send('asynchronous-message', 'ping')
  });

  window.addEventListener('close', () => {
    ipcRenderer.send('window', 'close')
  });

  window.addEventListener('fullscreen', () => {
    ipcRenderer.send('window', 'fullscreen')
  });

  window.addEventListener('minimize', () => {
    ipcRenderer.send('window', 'minimize')
  });
})