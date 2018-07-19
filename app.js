var express = require('express');
var app = express();
var db = require('./db');//telling the app it has a database connection available

var UserController = require('./user/UserController');//informing the app of the user controller
app.use('/users', UserController);
module.exports = app;



// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect to bootstrap JS
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS for jQuery
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); //redirect to css bootstrap
module.exports = app;