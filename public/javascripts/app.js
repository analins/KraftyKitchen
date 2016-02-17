var app = angular.module('kraftyApp', [
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'mainController',
  'loginController',
  'searchController',
  'modalController',
  // 'modalInstanceCtrl',
  'usersApiFactory',
  'yummlyApiFactory'
]);

// app.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: '/templates/main.html',
//       controller: 'mainController'
//     })
//     .when('/', {
//       templateUrl: '/templates/main.html',
//       controller: 'loginController'
//     })
//     // .when('/profile', {
//     //   templateUrl: '/templates/profile.html',
//     //   controller: 'mainController' 'searchController'
//     // });
//     .otherwise ({
//       redirectTo: '/'
// //     })
// }]);
