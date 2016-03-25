(function() {
  'use strict';
  /*globals gulp, config, browserSync*/

  gulp.task('serve', function() {
    browserSync.init({
      logLevel: config.debug ? 'debug' : '',
      notify: false,
      port: config.server.port,
      server: {
        baseDir: config.paths.dest.root,
        routes: {}
      }
      // middleware: function() {
      //   return [
      //     modRewrite([
      //       '!\\.html|\\images|\\.js|\\.css|\\.png|\\.jpg|\\.woff|\\.ttf|\\.svg / [L]'
      //     ])
      //   ];
      // }
    });
  });
})();