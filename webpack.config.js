var path = require('path');
var webpack = require('webpack');

var config = {
  entry: 'index.js',
  output: {
    path: path.join(__dirname, 'public', 'js')
  }
};

module.exports = config;