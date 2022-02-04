/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import AboutPage from "./about/aboutpage";
import HomePage from "./home/homepage";

export default function IndexPage(){

  return <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />


    </Routes>
  </div>
}