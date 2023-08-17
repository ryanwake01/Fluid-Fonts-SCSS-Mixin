const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
function compileStyles() {
  return src('scss/global.scss')
  .pipe(sass())
  .pipe(dest('css'))
}
function watchTask() {
  watch(['scss/global.scss'], compileStyles)
}

exports.default = series(compileStyles, watchTask)