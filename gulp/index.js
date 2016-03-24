(function() {
  'use strict';
  
  /**
   *  Require FileSystem Module
   **/
  var fs = require('fs');

  /**
   *  Create empty tasks obj
   **/
  var tasks = {};

  /**
   *  Read all directories defined in root dir
   *  filter all directories and per directory test them
   *  then use map to put the require by dir in the tasks
   *  object. After that export all too a module.
   **/
  fs.readdirSync('./gulp')
    .filter(function(item) {
        return !/\.js/.test(item);
      }
    )
    .map(function(name) {
        tasks[name] = require('./' + name);
      }
    );

  module.exports = tasks;
})();