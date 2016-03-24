(function() {
  'use strict';
  /*globals gulp, config, gutil, connect*/

  var mainBowerFiles = require('main-bower-files');
  var sourcemaps = require('gulp-sourcemaps');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  // var uglifycss = require('gulp-uglifycss');

  // Define bower task and call vendor tasks
  gulp.task('libs', ['vendorJS', 'vendorCSS']);

  /**
   *  This task gets all bower javascript files and
   *  puts them in the assets/libs directory
   **/
  gulp.task('vendorJS', function() {
    return gulp.src(
      mainBowerFiles(
        {
          paths: {
            bowerDirectory: config.paths.bower.root,
            bowerrc: config.paths.bower.rc,
            bowerJson: config.paths.bower.json
          },
          env: process.env.NODE_ENV,
          debugging: config.debug
        }
      )
    )
    .pipe(sourcemaps.init())
    .pipe(process.env.NODE_ENV === 'production' ? concat(config.production.libsJs) : gutil.noop())
    .pipe(process.env.NODE_ENV === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.dest.libs))
    .pipe(connect.reload());
  });

  /**
   *  This task gets all bower css files and
   *  puts them in the assets/libs directory
   **/
  gulp.task('vendorCSS', function() {
    return true;
  });
})();
