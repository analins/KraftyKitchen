var main = angular.module('mainController', []);

  main.controller('mainController', ['$scope', 'usersApi', function ($scope, usersApi) {

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

////////////////////////////////////////////////////////////

//LOGIN CONTROLLER
var login = angular.module('loginController', []);

  login.controller('loginController', ['$scope', 'usersApi', '$cookies', function ($scope, usersApi, $cookies) {
    $scope.users = [];
    $scope.loginInfo = {};

    $scope.signIn = function () {
      usersApi.logIn($scope.loginInfo).then(function (response) {
        var token = response.data.token;
        console.log(token);
        $cookies.put('token', token);
        $scope.loginInfo = {};
      });
    }

    $scope.logOut = function () {
      $cookies.remove('token');
      console.log('logged out');
    }

}]);

////////////////////////////////////////////////////////////

//SEARCH CONTROLLER
var search = angular.module('searchController', []);

  search.controller('searchController', ['$scope','yummlyApi', function ($scope, yummlyApi) {
    $scope.inputs = [];
    $scope.ingredients = [];
    $scope.refinedResults = [];

    $scope.addIngredient = function () {
      $scope.inputs.push({});
    }

    $scope.search = function () {
      for (var i = 0; i < $scope.inputs.length; i++) {
        $scope.ingredients.push($scope.inputs[i].value);
        console.log($scope.ingredients);
      }

      ////////////////////
      yummlyApi.getResults($scope.ingredients).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].ingredients.length === $scope.ingredients.length) {
              $scope.refinedResults.push(response.data[i]);
              console.log($scope.refinedResults);
          }
        }
      });

    }

  }]);
