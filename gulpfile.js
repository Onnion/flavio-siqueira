var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip  = require('gulp-strip-css-comments');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');

var paths = {
  html: 'src/index.html',
  styles: [
    'src/style.css',
    'src/components/*/*.css',
    'src/assets/css/*.css',
    'node_modules/@fortawesome/fontawesome-free/css/all.css'
  ],
  scripts: [
    'src/assets/js/jquery.js',
    'src/assets/js/!(jquery)*.js'
  ],
  font: 'node_modules/@fortawesome/fontawesome-free/webfonts/*.*'
}

gulp.task('clean', function () {
  return gulp.src('./public/*').pipe(clean());
});

gulp.task('init', function () {
  
});

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('public/'));
});

gulp.task('styles', function(){
  return gulp.src(paths.styles)
    .pipe(csso())
    .pipe(concat('all.css'))
    .pipe(strip({preserve: false}))
    .pipe(gulp.dest('public/css'))
});

gulp.task('fonts', function() {
  return gulp.src(paths.font)
    .pipe(gulp.dest('public/webfonts/'));
})

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'))
});

gulp.task('default', function (cb) {
  return runSequence('clean', [ 'styles', 'scripts', 'fonts', 'html' ], cb);
});

gulp.task('watch', function () {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});
