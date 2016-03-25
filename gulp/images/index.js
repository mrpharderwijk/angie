(function() {
  'use strict';
  /*globals gulp, config*/

  var changed = require('gulp-changed');
  var imagemin = require('gulp-imagemin');

  gulp.task('images', function () {
    return gulp.src(config.paths.src.img + '/*')
      .pipe(changed(config.paths.dest.img))
      .pipe(imagemin())
      .pipe(gulp.dest(config.paths.dest.img));
  });
})();