(function() {
  'use strict';
  /*globals gulp*/
  
  var runSequence = require('run-sequence');

  gulp.task('build', function(callback) {
    runSequence('clean', [
      'libs',
      'scripts',
      'copy',
      'sass',
      'images',
      'fonts',
      'inject',
      'serve'
    ], callback);
  });
})();