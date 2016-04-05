(function() {
  'use strict';
  /* globals gulp */

  var karma = new require('karma').Server;

  gulp.task('test', function(done) {
    karma.start({
      configFile: process.cwd() + '/karma.conf.js',
      singleRun: true
    }, function() {
      done();
    });
  });
})();