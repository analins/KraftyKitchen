var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  token: {type: String},
  name: {type: String},
  email: {type: String},
  newsletter: {type: Boolean}
  // shoppingList: [ingredientSchema],?
  //userPantry: [ingredientSchema],?
  //recipes: [saved recipes from Yummly]
});


userSchema.pre('save', function (next) {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 10);
  }
  return next();
})

userSchema.methods.authenticate = function (passwordTry, callback) {
  bcrypt.compare(passwordTry, this.password, function (err, isMatch) {
    if (err) {return callback(err);}
    callback(null, isMatch);
  });
}

userSchema.methods.setToken = function (err, callback) {
  var scope = this;
  crypto.randomBytes(256, function (err, rawToken) {
    scope.token = rawToken;
    scope.save(function () {
      if (err) {return callback(err);}
      callback();
    });
  });
}

module.exports = mongoose.model('User', userSchema);
