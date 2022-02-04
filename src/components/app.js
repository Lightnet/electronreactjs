/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";

import ElectronHeader from "./electron/electronheader";
import { ThemeProvider } from "./theme/themeprovider";
import {
  BrowserRouter,
} from "react-router-dom";
import IndexPage from "./indexpage";
import NavBar from "./navbar";

// https://reactrouter.com/docs/en/v6/getting-started/overview

export default function MyApp(){

  return <ThemeProvider>
      <BrowserRouter>
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
        <NavBar />
        <IndexPage />
      </div>
    </BrowserRouter>
  </ThemeProvider>
}