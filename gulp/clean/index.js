(function() {
  'use strict';
  /*globals gulp, config*/

  var del = require('del');

  gulp.task('clean', function () {
    // Remove the destination directory
    return del(config.paths.dest.root + '/**');
  });
  
})();