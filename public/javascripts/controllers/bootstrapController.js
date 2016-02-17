var ctrl = angular.module('modalController', []);
//   ctrl.controller('modalController', function ($scope) {
//     $scope.showModal = false;
//         $scope.toggleModal = function(){
//             $scope.showModal = !$scope.showModal;
//         };
//       });


ctrl.controller('modalController', ['$scope', '$uibModal', '$log', function ($scope, $uibModal, $log) {
  $scope.users = [];
  $scope.newUser = {
    // username: null,
    // password: null,
    // token: null,
    // name: null,
    // email: null,
    // newsletter: null
  }

  $scope.animationsEnabled = true;

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'signupmodal.html',
      controller: 'modalInstanceCtrl',
      resolve: {
        user: function () {
          return $scope.newUser;
        }}
    });

    modalInstance.result.then(function (newUser) {
      $scope.newUser = newUser;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}])

var mctrl = angular.module('modalInstanceCtrl', []);
mctrl.controller('modalInstanceCtrl', ['$scope', '$uibModalInstance', 'usersApi', function ($scope, $uibModalInstance, usersApi) {

  $scope.users = [];
  $scope.newUser = {
    // username: null,
    // password: null,
    // token: null,
    // name: null,
    // email: null,
    // newsletter: null
  }
  $scope.masterUser = angular.copy($scope.newUser);

  $scope.createUser = function () {
    usersApi.createUser($scope.newUser).then(function (response) {
      console.log(response);
      $scope.getUsers();
      $uibModalInstance.close(  $scope.newUser = angular.copy($scope.masterUser));
    });
  }

  $scope.ok = function () {
    $uibModalInstance.close($scope.user);
  };

  // $scope.cancel = function () {
  //   $uibModalInstance.dismiss('cancel');
  // };
}]);
