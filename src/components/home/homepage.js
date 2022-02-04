/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import ButtonApi from "../ui/buttonapi";
import EleClient from "../electron/eleclient";

export default function HomePage(){

  return <>
    <label>Home</label> <br />
    <label>Hello World! React!</label> <br />
      <ButtonApi></ButtonApi> <br />
      <EleClient></EleClient> <br />
  </>
}