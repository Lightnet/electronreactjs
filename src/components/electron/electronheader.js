/*

 */
// https://ourcodeworld.com/articles/read/287/how-to-create-a-custom-frameless-window-without-title-bar-with-minimize-maximize-and-close-controls-in-electron-framework
// https://www.electronjs.org/docs/latest/tutorial/window-customization
import React from "react";
import ThemeButton from "../theme/themebutton";

export default function ElectronHeader(){

  //need to fixed this later flaw
  function clickMinimize(){
    console.log('minimize');
    window.dispatchEvent(new Event('minimize'))
  }

  function toggleFullScreen(){
    console.log('size');
    window.dispatchEvent(new Event('fullscreen'))
  }

  function clickClose(){
    console.log('close');
    window.dispatchEvent(new Event('close'))
  }

  function clickMenu(){

  }

  function clickRefresh(){
    console.log(window.location);
    window.location = ('http://localhost:3000')
  }

  return <div className="headerp" style={{
    position:'fixed'
    , top:'0px'
    , left:'0px'
    , width:'100%'
    , height:'28px'
    , WebkitAppRegion:'drag'
    //, background:'#000000'
  }}>
    <div style={{
    position:'fixed'
    , top:'0px'
    , left:'0px'
    , WebkitAppRegion:'no-drag'
    }}>
      <button onClick={clickMenu}> (O) </button>
      <button onClick={clickRefresh}> Refresh </button>
      <ThemeButton></ThemeButton>
    </div>

    <div style={{
    position:'fixed'
    , top:'0px'
    , right:'0px'
    , WebkitAppRegion:'no-drag'
    }}>
      <button onClick={clickMinimize}> _ </button>
      <button onClick={toggleFullScreen}> [_] </button>
      <button onClick={clickClose}> X </button>
    </div>

  </div>
}