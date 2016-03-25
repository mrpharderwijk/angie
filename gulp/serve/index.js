(function() {
  'use strict';
  /*globals gulp, config, browserSync*/

  // var modRewrite = require('connect-modrewrite');

  gulp.task('serve', function() {
    browserSync.init({
      logLevel: config.debug ? 'debug' : '',
      notify: false,
      port: config.server.port,
      server: {
        baseDir: config.paths.dest.root,
        routes: {}
      }
    });
  });

  // gulp.task('serve', function() {
  //   connect.server({
  //     root: config.paths.dest.root,
  //     port: config.server.port,
  //     livereload: true,
  //     debug: config.debug,
  //     middleware: function() {
  //       return [
  //         modRewrite([
  //           '!\\.html|\\images|\\.js|\\.css|\\.png|\\.jpg|\\.woff|\\.ttf|\\.svg / [L]'
  //         ])
  //       ];
  //     }
  //   });
  // });
})();