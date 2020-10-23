const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');


// Setting up SCSS compiling
function compileSCSS() {
  return src('./src/scss/style.scss')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error);
      }
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(dest('.'));
};



function gulpTask(cb) {
  console.log('👋 Hello!');
  cb();
};

exports.default = gulpTask;
exports.compile = compileSCSS;