var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/', function (req, res) {
  User.find({}, function (err, dbUsers) {
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
  var newUser = new User(req.body.user);
  console.log(req.body);
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
            console.log('logged in');
            res.json({description: 'success', token: dbUser.token});
          
          });
        }
      });
    } else {
      console.log('try again');
      res.json({description: 'try again', status: 302});
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

router.put('/:id', function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body.user, function (err, dbUser) {
 if (err) {return err}
 if (!user){
 return next ({status: 404, message: 'not user' })
}
    dbUser.save();
      res.json(user)
  });
});


//ADD ROUTES FOR USER RECIPE/INGREDIENTS



module.exports = router;
