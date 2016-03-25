(function() {
  'use strict';
  /*globals gulp, config, browserSync*/

  var watch = require('gulp-watch');

  /**
   *  This is the watch task. Inside this task all
   *  watched folders/files are defined
   **/
  gulp.task('watch', function() {
    // Sass Watcher
    watch(config.paths.src.css + '/**/*.scss', 
      {
        name: 'sass'
      }, function() {
        gulp.start('sass');
      }
    );

    // Image Watcher
    watch(config.paths.src.img + '/**',
      {
        name: 'image'
      }, function() {
        gulp.start('images');
      }
    );

    // Fonts Watcher
    watch(config.paths.src.fonts + '/**', 
      {
        name: 'font'
      }, function() {
        gulp.start('fonts');
      }
    );

    // Template Watcher
    watch(config.paths.src.root + '/**/*.html', 
      {
        name: 'template'
      }, function() {
        gulp.start('copy');
      }
    );

    // JavaScript Watcher
    watch(config.paths.src.root + '/**', {
        name: 'javascript'
      }, function() {
        gulp.start('inject');
      }
    );

    // BrowserSync Reload
    if(config.server.livereload) {
      watch(config.paths.dest.root + '/**/*.*')
        .on('change', function() {
          browserSync.reload();
        });  
    }
  });
})();