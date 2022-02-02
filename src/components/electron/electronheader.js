/*

 */
// https://ourcodeworld.com/articles/read/287/how-to-create-a-custom-frameless-window-without-title-bar-with-minimize-maximize-and-close-controls-in-electron-framework
// https://www.electronjs.org/docs/latest/tutorial/window-customization
import React from "react";

export default function ElectronHeader(){

  function minimus(){

  }

  function toggleSize(){

  }


  function clickClose(){

  }

  return <div style={{
    position:'fixed'
    , top:'0px'
    , left:'0px'
    , width:'100%'
    , height:'28px'
    , WebkitAppRegion:'drag'
    , background:'#000000'
  }}>
    <div style={{
    position:'fixed'
    , top:'0px'
    , right:'0px'
    , WebkitAppRegion:'no-drag'
  }}>
    <button> _ </button>
    <button> [_] </button>
    <button onClick={clickClose}> X </button>


  </div>

  </div>
}