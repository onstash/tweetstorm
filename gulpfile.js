const gulp = require('gulp');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');
const shell = require('gulp-shell');

const {
  getAllJSFiles, getAllTestFiles, registerLintedGulpTasks
} = require('./gulp/helpers');

gulp.task('lint', () => {
  return gulp.src(getAllJSFiles())
             .pipe(eslint({
               useEslintrc: true
             }))
             .pipe(eslint.formatEach('compact', gutil.log));
});

const EXEC_TEST = 'exec-test';
registerLintedGulpTasks(gulp)(EXEC_TEST, shell.task([
  `./node_modules/.bin/babel-tape-runner ${getAllTestFiles().join(' ')} | ./node_modules/.bin/tap-colorize`,
]));
gulp.task('test', [EXEC_TEST], () => {
  if (process.env.TRAVIS_TEST == "true") {
    gulp.src(getAllJSFiles(), [EXEC_TEST]);
  } else {
    gulp.watch(getAllJSFiles(), [EXEC_TEST]);
  }
});
