'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'browser-sync'
  ]
});

var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var argv = require('minimist')(process.argv.slice(2));
var buildConfig = require('../config/build.config.js');
var webpackConfig = require('../config/webpack.config.js');

var isProd = argv.prod || false;
var buildDir = buildConfig.buildDir;
var appAssets = buildConfig.appAssets;
var appStyleFiles = buildConfig.appStyleFiles;
var appEntry = buildConfig.appEntry;

gulp.task('default', ['build']);

gulp.task('clean', del.bind(null, [buildDir]));

gulp.task('styles', function() {
  var lessFilter = $.filter('**/*.less');
  var scssFilter = $.filter('**/*.scss');
  var stylusFilter = $.filter('**/*.styl');
  return gulp.src([appStyleFiles])
    .pipe($.sourcemaps.init())
    .pipe(lessFilter)
    .pipe($.less())
    .pipe(lessFilter.restore())
    .pipe(scssFilter)
    .pipe($.sass())
    .pipe(scssFilter.restore())
    .pipe(stylusFilter)
    .pipe($.stylus())
    .pipe(stylusFilter.restore())
    .pipe($.autoprefixer())
    .pipe($.concat('styles.css'))
    .pipe($.if(isProd, $.cssmin()))
    .pipe($.if(isProd, $.rev()))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(buildDir));
});

gulp.task('assets', function() {
  return gulp.src(appAssets)
    .pipe(gulp.dest(buildDir))
    .pipe($.size({title: 'assets'}));
});

gulp.task("webpack", function() {
  return gulp.src(appEntry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['styles', 'assets', 'webpack'], cb);
});

gulp.task('browserSync', function() {
  $.browserSync({
    host: buildConfig.host,
    open: 'external',
    port: buildConfig.port,
    server: {
      baseDir: buildDir
    }
  });
});

gulp.task('watch', function() {
  $.browserSync.reload();
  gulp.watch([buildConfig.appBase + '**/*'], ['build', $.browserSync.reload]);
});

gulp.task('dev', ['build'], function() {
  gulp.start('browserSync');
  gulp.start('watch');
});