(function() {
  'use strict';

  angular
    .module('comp.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl() {
    var dash = this;

    dash.header = 'Dash Header';
    dash.content = 'Dash Content';
    dash.footer = 'Dash Footer';

    dash.testFn = function() {
      console.log('testFn');
    };
  }
})();