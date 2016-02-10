var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
require('dotenv').load();
var loadUser = require('./middleware/loadUser');

var app = express();

app.use(express.static(__dirname + './public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(loadUser);

var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/kraftykitchen';
mongoose.connect(mongoPath);


var indexRoute = require('./routes/index');
var usersApi = require('./routes/api/users');

app.use('/', indexRoute);
app.use('/api/users', usersApi);


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('heyyy ' + port);
});
