(function() {
  'use strict';
  /*globals gulp, config, gutil*/

  var changed = require('gulp-changed');
  var concat = require('gulp-concat');
  var jshint = require('gulp-jshint');
  var lazypipe = require('lazypipe');
  var ngAnnotate = require('gulp-ng-annotate');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');

  // sequence for production
  var productionChannel = lazypipe()
    .pipe(sourcemaps.init)
    .pipe(concat, config.production.appJs + '.js')
    .pipe(uglify)
    .pipe(sourcemaps.write, 'maps');

  // sequence for development
  var developmentChannel = lazypipe()
    .pipe(changed, config.paths.dest.root);

  /**
   *  Scripts task first runs jshint, ng-annotate
   *  then checks what build we are running and then
   *  places all files in the destination folder
   **/
  gulp.task('scripts', function() {
    return gulp.src(
      [
        config.paths.src.app + '/*.modules.js',
        config.paths.src.app + '/*.config.js',
        config.paths.src.app + '/*.constants.js',
        config.paths.src.app + '/**/!(*-)*.js',
        config.paths.src.app + '/**/!(*-*-)*.js',
        config.paths.src.app + '/**/!(*-*-*-)*.js',
        config.paths.src.app + '/**/*.*.js',
        config.paths.src.app + '/**/**/*.js'
      ], {
        debug: false
      }
    )
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail')
      .on(
        'error', function(err) {
          gutil.log(err.message);
        }
      )
    )
    .pipe(
      ngAnnotate(
        {
          remove: true,
          add: true,
          single_quotes: true
        }
      )
    )
    .pipe(process.env.NODE_ENV === 'production' ? productionChannel() : developmentChannel())
    .pipe(gulp.dest(config.paths.dest.app));
  });
})();