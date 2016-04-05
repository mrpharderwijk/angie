(function() {
  'use strict';
  
  angular
    .module('comp.dashboard')
    .config(Config);

  function Config($stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/',
        controller: 'DashboardCtrl as dash',
        templateUrl: 'app/components/dashboard/dashboard.html'
      });
  }
})();