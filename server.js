var express = require('express');
var path = require('path');
var compression = require('compression');
var dotenv = require('dotenv');
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');

var app = express();
var HomeController = require('./controllers/home');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  trimBlocks: true
});

app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);

app.get('/', HomeController);

app.listen(app.get('port'), function(){
  console.log(`🌍  server listening on port` + app.get('port'));
});
