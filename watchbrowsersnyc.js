/*
  Browser client reload...
*/

const browserSync = require("browser-sync").create();

// Start the server
browserSync.init({
    server: "."
  , ui:false
  , watch: true
  //, port: 8080
  , open: false
});