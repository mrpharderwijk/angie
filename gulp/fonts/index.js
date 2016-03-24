(function() {
  'use strict';
  /*globals gulp, config, connect*/

  var changed = require('gulp-changed');

  gulp.task('fonts', function() {
    return gulp.src(config.paths.src.fonts + '/**/*.*')
      .pipe(changed(config.paths.dest.fonts))
      .pipe(gulp.dest(config.paths.dest.fonts))
      .pipe(connect.reload());
  });
})();