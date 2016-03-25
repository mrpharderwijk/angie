(function() {
  'use strict';
  /*globals gulp, config, gutil*/

  var changed = require('gulp-changed');
  var eventStream = require('event-stream');
  var minifyHtml = require('gulp-minify-html');

  gulp.task('copy', ['indexHtml', 'appHtml']);

  gulp.task('indexHtml', function () {
    return eventStream.merge(
      getHtml(config.paths.src.root, config.paths.dest.root, false)
    );
  });

  gulp.task('appHtml', function () {
    return eventStream.merge(
      getHtml(config.paths.src.app, config.paths.dest.app, true)
    );
  });

  function getHtml(src, dest, minify) {
    return gulp.src(src + '/**/*.html')
    .pipe(
      changed(dest)
    )
    .pipe( minify ? 
      minifyHtml(
        {
          empty: true,
          spare: true,
          quotes: true
        }
      ) : gutil.noop()
    )
    .pipe(gulp.dest(dest));
  }
})();
