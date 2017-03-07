const gulp = require('gulp');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');

const { getAllJSFiles } = require('./gulp/helpers');

gulp.task('lint', () => {
  return gulp.src(getAllJSFiles())
             .pipe(eslint({
               useEslintrc: true
             }))
             .pipe(eslint.formatEach('compact', gutil.log));
});
