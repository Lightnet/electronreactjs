/*
  LICENSE: MIT
  Created by: Lightnet
*/

// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

import React from "react";

export default function EleClient(){

  function clickTest(){
    //console.log(ipcRenderer);
    const event = new Event('calleletron');

    window.dispatchEvent(event);

  }

  return <>
    <button onClick={clickTest}> Test Ele</button>
  
  </>
}