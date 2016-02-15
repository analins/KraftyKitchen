var express = require('express');
var router = express.Router();
var Yummly = require("ws-yummly");

Yummly.config({
		app_id : process.env.YUMMLY_ID,
		app_key : process.env.YUMMLY_KEY,
	});

  router.post('/', function (req, res) {
    Yummly.query()
        // .maxResults(20)
				.allowedIngredients(req.body.ingredients)
				.maxResults(40)
        // .requirePictures(true)
        .get()
        .then(function(resp){
          res.json(resp.matches);
            resp.matches.forEach(function(recipe){
                // console.log(recipe.recipeName);
            });

        }).catch(function (error) {
        console.log(error);
				});
  });


	router.post('/recipedetails', function (req, res) {
		var recipes = req.body.recipeIds;
		Yummly.getDetails(recipes)
		.then(function (resp) {
			res.json(resp)
				resp.forEach(function (recipe) {
						console.log(recipe.name);
				});
		}).catch(function (error) {
				console.log(error);
		});
			});



  module.exports = router;
