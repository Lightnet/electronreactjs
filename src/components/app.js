/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import ButtonApi from "./buttonapi";
import EleClient from "./electron/eleclient";
import ElectronHeader from "./electron/electronheader";

export default function MyApp(){

  return <>
    <ElectronHeader></ElectronHeader>
    <div style={{
    position:'fixed'
    , top:'28px'
    , left:'0px'
    , width:'100%'
    , height:'100%'
    //, WebkitAppRegion:'drag'
    //, background:'#000000'
  }}>
    <label>Hello World! React!</label>
    <ButtonApi></ButtonApi>
    <EleClient></EleClient>

  </div>
  </>
}