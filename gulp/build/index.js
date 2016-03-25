(function() {
  'use strict';
  /*globals gulp*/
  
  var runSequence = require('run-sequence');

  gulp.task('build', function(callback) {
    runSequence('clean', [
      'inject',
      'images',
      'fonts',
      'copy',
      'serve'
    ], 'inject', callback);
  });
})();