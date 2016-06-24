var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './app/main',
  output: {
    path: path.join(__dirname, 'public', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  }
};

module.exports = config;
