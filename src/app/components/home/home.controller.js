(function() {
  'use strict';

  angular
    .module('comp.home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var home = this;

    home.header = 'Home Header';
    home.content = 'Home Content';
    home.footer = 'Home Footer';
  }
})();