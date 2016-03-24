(function() {
  'use strict';
  /*globals gulp, config, connect*/

  var modRewrite = require('connect-modrewrite');

  gulp.task('serve', function() {
    connect.server({
      root: config.paths.dest.root,
      port: config.server.port,
      livereload: true,
      debug: config.debug,
      middleware: function() {
        return [
          modRewrite([
            '!\\.html|\\images|\\.js|\\.css|\\.png|\\.jpg|\\.woff|\\.ttf|\\.svg / [L]'
          ])
        ];
      }
    });
  });
})();