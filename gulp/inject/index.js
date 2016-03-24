(function() {
  'use strict';
  /*globals gulp, config, connect*/

  var inject = require('gulp-inject');

  gulp.task('inject', ['inject-js', 'inject-css']);

  // CSS inject
  gulp.task('inject-css', ['sass'], function () {
    return gulp.src(config.paths.src.root + '/index.html')
      .pipe(inject(
        gulp.src(config.paths.dest.css + '/*.css'),
        {
          starttag: '<!-- inject:css -->',
          addPrefix: false,
          addRootSlash: false,
          read: false
        }
      ))
      .pipe(gulp.dest(config.paths.dest.root))
      .pipe(connect.reload());
  });

  // JavaScript inject
  gulp.task('inject-js', ['scripts'], function () {
    return gulp.src(config.paths.src.root + '/index.html')
      .pipe(inject(
        gulp.src([
          config.paths.dest.libs + '/angular.js',
          config.paths.dest.libs + '/angular-route.js',
          config.paths.dest.libs + '/angular-ui-router.js',
          config.paths.dest.libs + '/*.js',
          config.paths.dest.app + '/**/*.modules.js',
          config.paths.dest.app + '/**/*.config.js',
          config.paths.dest.app + '/**/*.controller.js',
          config.paths.dest.app + '/**/*.directive.js',
          config.paths.dest.app + '/**/*.resource.js',
          config.paths.dest.app + '/**/*.service.js',
          config.paths.dest.app + '/**/*.js'
        ]),
        {
          starttag: '<!-- inject:js -->',
          addPrefix: false,
          addRootSlash: false,
          ignorePath: 'public',
          read: false
        }
      ))
      .pipe(gulp.dest(config.paths.dest.root))
      .pipe(connect.reload());
  });
})();