var express = require('express');
var path = require('path');
var compression = require('compression');
var dotenv = require('dotenv');
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');
var React = require('react');
var ReactDOM = require('react-dom/server');

dotenv.load();

// ES6 and jsx Transpiler
require('babel-core/register');
require('babel-polyfill');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
// all static files are served from here, no need to write 'public' in path,
// example => <script src="/js/bundle.js"></script>, js is inside public

var HomeController = require('./controllers/home');
var userController = require('./controllers/user');

var App = require('./app/components/App');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  trimBlocks: true
});

app.set('view engine', 'html');
app.set('port', process.env.PORT || 4000);

/* `mongod --dbpath=./db` */

// app.get('/', HomeController);
app.get('/user', userController);

var data = {name: 'some name'};

// React server-side rendering
app.use('/', function(req, res){
  var html = ReactDOM.renderToString(React.createElement(App, {data: data}));
  res.setHeader('Content-Type', 'text/html');
  var page = nunjucks.render('layout.html', {html: html});
  res.status(200).send(page);
});

app.listen(app.get('port'), function(){
  console.log(`🌍  server listening on port ` + app.get('port'));
});
