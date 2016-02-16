var express = require('express');
var router = express.Router();
var Yummly = require("ws-yummly");

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
              console.log(recipe.id);
            });

        }).catch(function (error) {
        console.log(error);
				});
  });


	router.get('/:id', function (req, res) {
		var recipes = req.body.recipeIds;
		Yummly.getDetails(recipes)
		.then(function (resp) {
			res.json(resp.recipes)
				resp.forEach(function (recipe) {
						console.log(recipe.name);
				});
		}).catch(function (error) {
				console.log(error);
		});
			});



  module.exports = router;
