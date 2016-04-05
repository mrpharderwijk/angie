(function() {
  'use strict';
  /*globals gulp*/
  
  var runSequence = require('run-sequence');

  gulp.task('build', function(callback) {
    runSequence('clean', [
      'inject', // runs sass, libs & scripts
      'images',
      'fonts',
      'copy'
    ], 'serve', 'test', callback);
  });
})();