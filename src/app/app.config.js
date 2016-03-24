(function() {
  'use strict';

  angular
    .module('Angie')
    .config(Config);

  function Config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();