var app = angular.module('kraftyApp', [
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'mainController',
  'loginController',
  'searchController',
  'modalController',
  'usersApiFactory',
  'yummlyApiFactory'
]);

// app.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: '/templates/main.html',
//       controller: 'SearchController'
//     })
//     .when('/results/:id', {
//       templateUrl: '/templates/view.html',
//       controller: 'ResultController'
//     })
//     .otherwise ({
//       redirectTo: '/'
//     })
// }]);
//
// app.controller('SearchController', ['$scope', '$http', function ($scope, $http) {
//   $scope.results = [];
//   $scope.search = function () {
//     var input = $scope.input;
//     var searchUrl = 'http://www.omdbapi.com/?s='+ input +'&type=movie';
//
//     $http.get(searchUrl).then(function (response) {
//       $scope.results = response.data.Search;
//     });
//
//   }

// }]);
//
// app.controller('DisplayController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
//   $scope.result = {};
//   var id = $routeParams.id;
//   var movieUrl = 'http://www.omdbapi.com/?i=' + id;
//
//   $http.get(movieUrl).then(function (response) {
//     $scope.result = response.data
//   });
//
// }]);
