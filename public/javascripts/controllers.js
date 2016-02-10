
var main = angular.module('MainController', []);

  main.controller('mainController', ['$scope', 'usersApi', function ($scope, usersApi) {

    $scope.users = [];

    $scope.newUser = {}

    $scope.masterUser = angular.copy($scope.newUser);

    $scope.getUsers = function () {
      usersApi.getAll().then(function (response) {
        $scope.users = response.data.users;
      });
    }

    //can createUser go here or does it need to go with the login functionality??
    $scope.createUser = function () {
      usersApi.createUser($scope.newUser).then(function () {
        $scope.getUsers();
        $scope.newUser = angular.copy($scope.masterUser);
      });
    }

    $scope.editUser = function () {
      usersApi.updateUser($scope.user).then(function () {

      });
    }

    $scope.delete = function (id) {
      usersApi.delete(id).then(function () {
        $scope.getUsers();
      });
    }


      $scope.getUsers();

  }]);

//LOGIN CONTROLLER
var login = angular.module('loginController', []);

  login.controller('loginController', ['$scope', 'usersApi', '$cookies', function ($scope, usersApi, $cookies) {
    $scope.loginInfo = {};

    $scope.logIn = function (logininInfo) {
      usersApi.logIn($scope.loginInfo).then(function (response) {
        var token = response.data.token;
        $cookies.put('token', token);
        $scope.loginInfo = {};
      })
    }

    $scope.logOut = function () {
      $cookies.remove('token');
    }

}]);
