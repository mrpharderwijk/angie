(function() {
  'use strict';

  describe('controller: DashboardCtrl', function() {
    var scope;
    var ctrl;

    beforeEach(module('Angie'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
      scope = _$rootScope_.$new();
      ctrl = _$controller_('DashboardCtrl', {
        $scope: scope
      });
    }));

    it('should check model and be defined', function() {
      console.log(ctrl);
      expect(ctrl.testFn).toBeDefined();
    });
  });
})();