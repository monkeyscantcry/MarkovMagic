'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell')
var gutil = require('gulp-util')
var notify = require('gulp-notify');
// load plugins
var $ = require('gulp-load-plugins')();
var zip = require('gulp-zip');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var fs = require('fs');

gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .on('error', function (e) { console.log('\u0007'); gutil.log(e.message) })
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/styles/'))
        .pipe($.size());
});

gulp.task('watch', function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    contentBase: myConfig.output.contentBase,
    // hot: true,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });

  require('opn')('http://localhost:8080/webpack-dev-server/index.html');
  gulp.watch('app/styles/**/*.scss', ['styles']);

});
