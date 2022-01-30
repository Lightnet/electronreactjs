# electron react js

# Created by: Lightnet

# Information:
  Testing React.js build with Electron.js. Test build.

  Electronjs will run on nodejs.

  React.js will compile into babel with webpack builds. To bundle into single and use able.

## Packages:
 - react
 - gun
 - @babel/core
 - nodemon
 - npm-run-all
 - webpack 
 - express
 - electron
 - babel 7.x
 - browser-syn 2.27.7

# Developing build.
  Using the file:// url as it has some restrict place on the javascript. It to prevent leaks.

  Using import on the electronjs does not work. Some of the package is outdate. ECMAScript

  It would required nodemon and browsersync to able to reload server and client.

# start up:
- electronjs
  - init electron
  - init server
  - open browser
- webpack complie client to bundle to renderer.js

```
  npm install
  npm run dev
```


# links:
- https://github.com/electron/electron
- https://www.freecodecamp.org/news/setup-babel-in-nodejs/