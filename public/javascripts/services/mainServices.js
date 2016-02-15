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
