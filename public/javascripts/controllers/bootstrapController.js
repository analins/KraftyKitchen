var ctrl = angular.module('modalController', []);

ctrl.controller('modalController', ['$scope', '$uibModal', '$log', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'signupmodal.html'
    });

    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}])
