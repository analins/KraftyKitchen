var yum = angular.module('yummlyApiFactory', []);

  yum.factory('yummlyApi', ['$http', function ($http) {

    var searchUrl = '/api/yummly';
    var yummlyInterface = {};

    yummlyInterface.getResults = function (ingredients) {
      var payload = {ingredients: ingredients}
      return $http.post(searchUrl, payload);
    }

    yummlyInterface.getRecipe = function (recipes) {
      var url = searchUrl + '/recipedetails';
      var payload = {recipes: recipes}
      return $http.get(url, payload);
    }
    return yummlyInterface;
  }]);
