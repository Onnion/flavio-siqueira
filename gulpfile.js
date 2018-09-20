var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('styles', function(){
  return gulp.src('assets/css/*.css')
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('gulp'))
});

gulp.task('scripts', function(){
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('gulp'))
});

gulp.task('default', [ 'styles', 'scripts' ]);