(function() {
  'use strict';
  /*globals gulp*/
  
  var runSequence = require('run-sequence');

  gulp.task('build', function(callback) {
    runSequence('clean', [
      'test',
      'inject', // runs sass, libs & scripts
      'images',
      'fonts',
      'copy',
      'serve'
    ], 'inject', callback);
  });
})();