const { src, dest, parallel } = require('gulp');

// TODO: Add process for assets
// TODO: Add Husky for hooks

const plumber = require('gulp-plumber');
const log = require('fancy-log');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');


// Setting up SCSS processing
function processSCSS() {
  return src('./src/scss/style.scss')
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('.'))
    .on('end', function() {
      console.log('SCSS compiled!');
    });
};


// // Setting up JS processing
function compileJS() {
  return src('./src/js/**/*.js')
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(dest('./js/'))
    .on('end', function() {
      console.log('JS compiled!');
    });
};









function gulpTask(cb) {
  console.log('👋 Hello!');
  cb();
};

exports.default = gulpTask;
exports.compile = parallel(processSCSS, compileJS);


// #############################################################################
// #############################################################################
// Helper functions

function handleError(error) {
  console.log(error);
};