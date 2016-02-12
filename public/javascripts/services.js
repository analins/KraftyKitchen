var api = angular.module('usersApiFactory', []);

  api.factory('usersApi', ['$http', function ($http) {

    var baseUrl = '/api/users';
    var usersApiInterface = {};

    usersApiInterface.getAll = function () {
      return $http.get(baseUrl);
    }

    usersApiInterface.createUser = function (newUser) {
      var payload = {user: newUser};
      return $http.post(baseUrl, payload);
    }

    usersApiInterface.updateUser = function (user) {
      var payload = {user: user};
      var url = baseUrl + '/' + user._id;
      return $http.put(url, payload);
    }

    usersApiInterface.delete = function (id) {
      var url = baseUrl + '/' + id;
      return $http.delete(url);
    }

    usersApiInterface.logIn = function (loginInfo) {
      var url = baseUrl + '/authenticate';
      return $http.post(url, loginInfo);
    }

    return usersApiInterface;

  }]);

////////////////////////////////////////////////////////////

var yum = angular.module('yummlyApiFactory', []);

  yum.factory('yummlyApi', ['$http', function ($http) {
    var searchUrl = '/api/yummly';
    var yummlyInterface = {};

    yummlyInterface.getResults = function (ingredients) {
      var payload = {ingredients: ingredients}
      return $http.post(searchUrl, payload);
    }

    yummlyInterface.getRecipe = function () {
      var url = searchUrl + '/detail';
    }
    return yummlyInterface;
  }]);
