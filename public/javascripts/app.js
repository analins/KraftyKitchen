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

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/recipedetails/:id', {
      templateUrl: '/templates/recipedetails.ejs',
      controller: 'searchController'
    })
    .otherwise ({
      redirectTo: '/'
    })
}]);
