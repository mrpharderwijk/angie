(function() {
  'use strict';
  
  angular
    .module('comp.home')
    .config(Config);

  function Config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'app/components/home/home.html'
      });
  }
})();