'use strict';


var appBase = 'app/';
var buildDir = 'build/';

module.exports = {
  host: 'localhost',
  port: 3001,

  appBase: appBase,
  appAssets: 'app/public/**/*',
  appMarkupFiles: appBase + '**/*.{haml,html,jade}',
  appScriptFiles: appBase + '**/*.{coffee,js}',
  appStyleFiles: appBase + '**/*.{css,less,scss,styl}',
  appEntry: appBase + 'app.jsx',

  // build directories
  buildDir: buildDir,
  buildCss: buildDir + 'css/',
  buildFonts: buildDir + 'fonts/',
  buildImages: buildDir + 'images/',
  buildJs: buildDir + 'js/',

  appPath: process.cwd() + '/'
};