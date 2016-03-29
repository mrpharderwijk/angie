(function() {
  'use strict';
  /*globals gulp, config, gutil*/
  
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
      .pipe(gulp.dest(config.paths.dest.css));
  });

  /**
   *  This task gets all bower css files and
   *  puts them in the assets/libs directory
   **/
  gulp.task('vendorSass', function() {
    return gulp.src(config.paths.bower.root + '/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
    .pipe(sass().on('error', handleErrors))
    .pipe(autoprefixer())
    .pipe(uglifycss())
    .pipe(gulp.dest(config.paths.src.css + 'bootstrap.css'));
  });
})();