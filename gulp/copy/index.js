(function() {
  'use strict';
  /*globals gulp, config*/

  var changed = require('gulp-changed');
  var eventStream = require('event-stream');
  var minifyHtml = require('gulp-minify-html');

  gulp.task('copy', [
    'indexHtml',
    'appHtml'
  ]);

  gulp.task('indexHtml', function () {
    return eventStream.merge(
      getHtml(config.paths.src.root, config.paths.dest.root)
    );
  });

  gulp.task('appHtml', function () {
    return eventStream.merge(
      getHtml(config.paths.src.app, config.paths.dest.app)
    );
  });

  function getHtml(src, dest) {
    return gulp.src(src + '/**/*.html')
    .pipe(
      changed(dest)
    )
    .pipe(
      minifyHtml(
        {
          empty: true,
          spare: true,
          quotes: true
        }
      )
    )
    .pipe(gulp.dest(dest));
  }
})();
