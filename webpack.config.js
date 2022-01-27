/*
  LICENSE: MIT
  Created by: Lightnet
*/

'use strict'

process.env.BABEL_ENV = 'renderer';

//import { fileURLToPath } from 'url';
//import path, { dirname } from 'path';

//const { fileURLToPath } = require('url');
const path = require('path');
//const { dirname } = require('path');

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

let file = path.join(__dirname, "./src/client.js");
console.log(file);

module.exports = {

//export default env => {
   
   //return {
      //entry: path.join(__dirname,'./src/client.js'),
      entry: path.join(__dirname, "./src/client.js"),
      mode: process.env.NODE_ENV || "development",

      output: {
         //path: path.join(__dirname, '/public'),
         path: path.join(__dirname, '.'),
         filename: 'renderer.js'
      },
      devServer: {
         port: 3000,
         //contentBase: path.resolve(__dirname, './dist')
         //watchContentBase: true
      },
      module: {
         noParse:/gun\.js$|sea\.js$/,
         rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /nodeModules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
         ]
      },
      node: {
         //fs: "empty"
      },
      plugins:[
      ]
   //}
}