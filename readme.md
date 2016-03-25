# A.N.G.I.E.

**Angular 'N' Gulp Initialisation Entity** - This project is to quickly setup and yield an AngularJS project that uses Gulp for build automation.

## Table of Contents

[1. Installation](#installation)
[2. Build Automation With Gulp](#build-automation-with-gulp)
  <br />
  [2.1 Available Build Options](#available-build-options)
  <br />
  [2.2 Available Build Tasks](#available-build-tasks)

## 1. Installation

1. Fork this project
2. Clone your forked project on your local environment
3. Install Node Package Manager:

  `$ npm install`

4. Install Bower:

  `$ bower install`

5. Update Node Package Manager:
  
  `$ npm update`

6. Update Bower:
  
  `$ bower update`

7. Run the Gulp build:
  
  `$ gulp`

## 2. Build Automation With Gulp

This project uses Gulp to build its project files into a generated folder. I don't want to start the whole Grunt vs Gulp discussion so lets just continue with the details for this build script...

### 2.1 Available Build Options

+ **LiveReload**
  
  Defines if the browser should open/reload on start or changes. Default is true. TBD;
  <br />
  `$ gulp --reload`

+ **Production**
  
  Defines the production build. If this is not set a development build is run by default.
  <br />
  `$ gulp --prod` or `$ gulp --PROD`

+ **Port**
  
  Defines the port that is used for the local server. When nothing is set 3000 is used.
  <br />
  `$ gulp --port=9000` - will set the port to 9000

### 2.2 Available Build Tasks

+ **Build**
  
  Does the same as specifing no task. Run the default sequence of tasks defined.

+ **Clean**
  
  Will remove the generated folder defined in the config global.

+ **Copy**
  
  Minifies HTML from the root of the source directory and app directory parallel. After that it places the minified HTML files in the destination directories.

+ **Fonts**
  
  Grabs all fonts defined in the fonts directory and places them in its destination folder.

+ **Images**
  
  Minifies images and places the minified files in the destination folder.

+ **Inject**
  
  TBD;

+ **Libs**
  
  Get all Bower files defined in 'overrrides' and places in their destination folder. This uses an ENV variable to determine which file it needs to get from the Bower directory.

+ **Sass**
  
  TBD; gets all scss files NOT prefixed with '_', checks them for errors in the CSS/SCSS. When no errors are found the file will be converted to plain CSS and placed in the destination folder.

+ **Serve**
  
  Sets up a local server. Uses config variables for livereload, port and root. These settings can also be set by the --reload and --port flag when running the build.

+ **Scripts**
  
  Grabs all application files, checks Jshint for any errors, annotates all files and places them in their folder of destination. When this is a production build the files will be concatinated in one minified file, otherwise it will mirror the source files with annotations.

+ **Watch**
  
  TBD; the main watch task watches all directories for changes.