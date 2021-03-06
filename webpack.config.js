'use strict';

var _ = require('underscore');
var baseConfig = require('./webpack.base.config');

module.exports = _.extend({}, baseConfig, {
  entry: {
    'app': './src/js/app.es6'
  },
  output: {
    path: 'dist/',
    filename: 'index.js',
    library: 'MyLib',
    libraryTarget: 'umd'
  }
});
