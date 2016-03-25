(function() {
  'use strict';

  var gutil = require('gulp-util');

  process.env.DEBUG = gutil.env.debug ? true : '';
  process.env.NODE_ENV = gutil.env.prod || gutil.env.PROD ? 'production' : 'development';
  process.env.PORT = gutil.env.port ? gutil.env.port : 3000;
  process.env.RELOAD = gutil.env.reload ? true : '';

  module.exports = {
    debug: Boolean(process.env.DEBUG),
    server: {
      port: parseInt(process.env.PORT),
      root: 'public',
      livereload: Boolean(process.env.RELOAD)
    },
    production: {
      appCss: 'test',
      appJs: 'test',
      libsJs: 'libs'
    },
    paths: {
      dest: {
        root: './public',
        app: './public/app',
        libs: './public/assets/libs', // this will be the destination of all bower_components libs
        img: './public/assets/img',
        css: './public/assets/css',
        fonts: './public/assets/fonts'
      },
      src: {
        root: './src',
        app: './src/app',
        img: './src/assets/img',
        css: './src/assets/css',
        fonts: './src/assets/fonts'
      },
      bower: {
        root: './bower_components',
        rc: './.bowerrc',
        json: './bower.json'
      }
    }
  };
  
})();
