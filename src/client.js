/*
  browser client...

*/

console.log('Start React:',0);

import React from 'react';
import ReactDOM from 'react-dom';

import MyApp from "./app.js";

ReactDOM.render(<MyApp />, document.getElementById('root'));
console.log('End React:',1);