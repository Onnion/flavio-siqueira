var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip  = require('gulp-strip-css-comments');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');

var paths = {
  html: 'assets/html/*.html',
  styles: [
    'assets/css/*.css', 
    'node_modules/@fortawesome/fontawesome-free/css/all.css'
  ],
  scripts: [
    'assets/js/jquery.js',
    'assets/js/!(jquery)*.js',
    'assets/js/services/*.js'

  ],
  font: 'node_modules/@fortawesome/fontawesome-free/webfonts/*.*'
}

gulp.task('clean', () => {
  return gulp.src('./dist/*').pipe(clean());
});

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});


gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(csso())
    .pipe(concat('all.css'))
    .pipe(strip({preserve: false}))
    .pipe(gulp.dest('gulp/css'))
});

gulp.task('fonts', () => {
  return gulp.src(paths.font)
    .pipe(gulp.dest('gulp/webfonts/'));
})

gulp.task('scripts', () => {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('default', (cb) => {
  return runSequence('clean', [ 'styles', 'scripts', 'fonts', 'html' ], cb);
});

gulp.task('watch', () => {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});
