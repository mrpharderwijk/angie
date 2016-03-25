(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var home = this;

    home.header = 'Home Header';
    home.content = 'Home Content';
    home.footer = 'Home Footer';
  }
})();