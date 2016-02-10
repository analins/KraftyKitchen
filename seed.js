var User = require('./models/user');
var mongoose = require('mongoose');


// var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/meansignup_api';
mongoose.connect('mongodb://localhost/kraftykitchenapp');


function genUsers() {


    newUser = {};
      newUser.username = 'admin';
      newUser.password = 'admin';
      dbUser = new User(newUser);
      dbUser.save(function (dbUser) {

          console.log('yay!');

      });

  mongoose.disconnect();
}

genUsers();
