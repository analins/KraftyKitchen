var express = require('express');
var router = express.Router();
var Yummly = require("ws-yummly");
var request = require('request');

Yummly.config({
		app_id : process.env.YUMMLY_ID,
		app_key : process.env.YUMMLY_KEY,
	});

  router.post('/', function (req, res) {
    Yummly.query()
				.allowedIngredients(req.body.ingredients)
				.maxResults(40)
        .get()
        .then(function(resp){
          res.json(resp.matches);
            resp.matches.forEach(function(recipe){
              console.log(recipe.recipeName);
            });

        }).catch(function (error) {
        console.log(error);
				});
  });


	router.post('/results', function (req, res) {
		var recipes = req.body.recipes;
		Yummly.getDetails(recipes)
		.then(function (resp) {
				res.json(resp);
				resp.forEach(function (recipe) {
						console.log(recipe.name);
				});
		}).catch(function (error) {
				console.log(error);
		});
			});
// 	router.post('/results', function (req, res) {
// 		var recipeId = req.body.recipe.id;
// 		var url ='http://api.yummly.com/v1/api/recipe/'+ recipeId + '?' + process.env.YUMMLY_ID + '&' + process.env.YUMMLY_KEY;
//
// 		request(url, function (err, response) {
// 			res.json(response);
// 			console.log(response);
// });
// 	});



  module.exports = router;
