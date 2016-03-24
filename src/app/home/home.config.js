(function() {
  'use strict';
  
  angular
    .module('app.home')
    .config(Config);

  function Config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'app/home/home.html'
      });
  }
})();