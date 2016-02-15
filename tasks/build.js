var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var webpackConfig = require('../webpack.config.js');

gulp.task('dev', ['webpack', 'sass', 'copy-html', 'copy-assets', 'server'], function() {
  gulp.watch(['src/js/**/*.js'], ['webpack']);
  gulp.watch(['src/css/**/*.scss'], ['sass']);
  gulp.watch(['src/index.html'], ['copy-html']);
  gulp.watch(['src/assets/**/*'], ['copy-assets']);
});

gulp.task('dev-no-reload', ['webpack', 'sass', 'copy-html', 'server-no-reload'], function() {
  gulp.watch(['src/js/**.js'], ['webpack']);
  gulp.watch(['src/css/*.scss'], ['sass']);
  gulp.watch(['src/index.html'], ['copy-html']);
});

gulp.task('webpack', function() {
  webpackConfig.devtool = 'cheap-module-eval-source-map';
  return gulp.src(['src/js/index.js'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('copy-html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('copy-assets', function() {
  gulp.src('src/assets/**/*')
    .pipe(gulp.dest('build/assets/'))
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('server-no-reload', function() {
  connect.server({
    root: 'build',
    livereload: false
  });
});
