(function() {
  'use strict';
  /*globals gulp, config, gutil, connect*/
  
  var autoprefixer = require('gulp-autoprefixer');
  var bless = require('gulp-bless');
  var handleErrors = require('./handle-errors');
  var sass = require('gulp-sass');
  var uglifycss = require('gulp-uglifycss');

  gulp.task('sass', function() {
    return gulp.src(config.paths.src.css + '/**/!(_).scss')
      .pipe(sass())
      .on('error', handleErrors)
      .pipe(autoprefixer())
      .pipe(bless())
      .pipe(process.env.NODE_ENV === 'production' ? uglifycss() : gutil.noop())
      .pipe(gulp.dest(config.paths.dest.css))
      .pipe(connect.reload());
  });
})();