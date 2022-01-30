
import React from "react";
import ButtonApi from "./client/buttonapi";
import EleClient from "./components/electron/eleclient";

export default function MyApp(){

  return <>
    <label>Hello World! React!</label>
    <ButtonApi></ButtonApi>
    <EleClient></EleClient>
  </>
}