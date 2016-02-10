//Am I allowed to have one file with multiple modules??
var api = angular.module('usersApiFactory', []);

api.factory('usersApi', ['$http', function ($http) {

  var baseUrl = '/api/users';
  var usersApiInterface = {};

  usersInterface.getAll = function () {
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

  usersInterface.delete = function (id) {
    var url = baseUrl + '/' + id;
    return $http.delete(url);
  }

  usersApiInterface.logIn = function (loginInfo) {
    var url = baseUrl + '/authenticate';
    return (url, loginInfo);
  }



  return usersApiInterface;
}]);
