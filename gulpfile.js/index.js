const { src, dest, parallel, watch } = require('gulp');

// TODO: Add process for assets
// TODO: Add Husky for hooks

const plumber = require('gulp-plumber');
const log = require('fancy-log');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// #####################################################################
// Configs

const fileSRC = {
  jsFiles: './src/js/*.js',
  jsSRC: './src/js/index.js',
  scssFiles: './src/scss/*.scss',
  scssSRC: './src/scss/style.scss'
};

// #####################################################################


// Setting up SCSS processing
function processSCSS() {
  return src(fileSRC.scssSRC)
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('.'))
    .on('end', function() {
      log('Style.css created at location: "./style.css"');
    });
};


// // Setting up JS processing
function processJS() {
  return src(fileSRC.jsSRC)
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(dest('.'))
    .on('end', function() {
      log('index.js created at location: "./index.js"');
    });
};





function gulpTask(cb) {
  console.log('👋 Hello!');
  cb();
};

function dev() {
  const settings = {
    queue: true
  };

  watch(fileSRC.jsFiles, settings, processJS);
  watch(fileSRC.scssFiles, settings, processSCSS);
};

exports.default = gulpTask;
exports.compile = parallel(processSCSS, processJS);
exports.dev = dev;


// #############################################################################
// #############################################################################
// Helper functions

function handleError(error) {
  log(error);
};