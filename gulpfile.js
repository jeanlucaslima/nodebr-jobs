var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var less = require('gulp-less');
var jshint = require('gulp-jshint');

gulp.task('default', function(){
  return gutil.log('Gulp is running')
});

gulp.task('move', function(){
  // copy files from source to public folder
  gulp.src('/*.html').pipe(gulp.dest('public'));
});

gulp.task('jshint', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

