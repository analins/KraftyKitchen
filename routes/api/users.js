var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/', function (req, res) {
  user.find({}, function (err, dbUsers) {
    res.json({users: dbUsers})
  });
});

router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, dbUser) {
    if (err) {return next(err);}
    if (!dbUser){return next({status: 404, message: 'user not found'}); }
    res.json(dbUser);
  });
});

router.post('/', function (req, res) {
  var newUser = new User(req.body);
  newUser.save(function (err, dbUser) {
    console.log(dbUser);
    res.json(dbUser);
  });
});

router.post('/authenticate', function (req, res) {
  console.log('authenticating');
  User.findOne({username: req.body.username}, function (err, dbUser) {
    if(dbUser){
      dbUser.authenticate(req.body.password, function (err, isMatch) {
        if (isMatch) {
          dbUser.setToken(err, function () {
            res.json({description: 'success', token: dbUser.token});
          });
        }
      });
    } else {
      res.json({description: 'failed', status: 302});
    }
  });
});


router.delete('/:id', function (req, res) {
  console.log('deleting');
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err) {res.status(500).end();}
    res.status(204).end();
  });
});

// router.patch('/:id', function (req, res, next) {
//   User.findById(req.user._id, function (err, dbUser) {
//     dbUser. things I have not yet decided...like ingredients and recipes....
//     dbUser.save();
//   });
// });


//ADD ROUTES FOR USER RECIPE/INGREDIENTS



module.exports = router;
