(function() {
  'use strict';
  /*globals gulp*/
  
  global.config = require('./gulp/config.js');
  global.connect = require('gulp-connect');
  global.gulp = require('gulp');
  global.gutil = require('gulp-util');
  global.browserSync = require('browser-sync');
  global.debug = require('gulp-debug');

  // Require the directory where all gulp tasks are defined
  require('./gulp');

  // Define the default task and run build and watch tasks
  gulp.task('default', ['build', 'watch']);
})();