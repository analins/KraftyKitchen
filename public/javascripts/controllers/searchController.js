//SEARCH CONTROLLER//
var search = angular.module('searchController', []);

  search.controller('searchController', ['$scope','yummlyApi', function ($scope, yummlyApi) {
    $scope.inputs = [];
    $scope.ingredients = [];
    $scope.refinedResults = [];
    $scope.recipeIds = [];
    $scope.recipeDetails = []

    $scope.addIngredient = function () {
      $scope.inputs.push({});
    }

    $scope.search = function () {
      for (var i = 0; i < $scope.inputs.length; i++) {
        $scope.ingredients.push($scope.inputs[i].value);
        console.log($scope.ingredients);
      }

      yummlyApi.getResults($scope.ingredients).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].ingredients.length === $scope.ingredients.length) {
              $scope.refinedResults.push(response.data[i]);
          }
        }
        console.log($scope.refinedResults);
        for (var i = 0; i < $scope.refinedResults.length; i++) {
          $scope.recipeIds.push($scope.refinedResults[i].id);
        }
        console.log($scope.recipeIds);
        $scope.inputs = [];
      });

    }
      $scope.$watchCollection('recipeIds', function (newVal, oldVal) {

        yummlyApi.getRecipe(newVal).then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            $scope.recipeDetails.push(response.data[i]);
          }
          console.log($scope.recipeDetails);
        });
    });

  }]);
