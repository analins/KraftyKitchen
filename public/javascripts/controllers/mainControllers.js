var main = angular.module('mainController', []);

  main.controller('mainController', ['$scope', 'usersApi', function ($scope, usersApi) {

    $scope.users = [];
    $scope.newUser = {
    }
    $scope.masterUser = angular.copy($scope.newUser);

    $scope.getUsers = function () {
      usersApi.getAll().then(function (response) {
        $scope.users = response.data.users;
      });
    }

    $scope.createUser = function () {
      usersApi.createUser($scope.newUser).then(function (response) {
        console.log(response);
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

//LOGIN CONTROLLER//

var login = angular.module('loginController', []);

  login.controller('loginController', ['$scope', 'usersApi', '$cookies', function ($scope, usersApi, $cookies) {
    $scope.users = [];
    $scope.loginInfo = {};

    $scope.signIn = function () {
      usersApi.logIn($scope.loginInfo).then(function (response) {
        var token = response.data.token;
        console.log(token);
        $cookies.put('token', token);
        if (token) {
          $scope.loggedin = true;
            window.location='/profile';
        }else{
          $scope.loggedin = false;
          window.location='/'
        }

      });
    }

    $scope.logOut = function () {
      $cookies.remove('token');
      console.log('logged out');
      $scope.loggedin = false;
      window.location='/';
    }

}]);
