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
    'assets/js/!(jquery)*.js'
  ],
  font: 'node_modules/@fortawesome/fontawesome-free/webfonts/*.*'
}

gulp.task('clean', function () {
  return gulp.src('./dist/*').pipe(clean());
});

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});


gulp.task('styles', function(){
  return gulp.src(paths.styles)
    .pipe(csso())
    .pipe(concat('all.css'))
    .pipe(strip({preserve: false}))
    .pipe(gulp.dest('gulp/css'))
});

gulp.task('fonts', function() {
  return gulp.src(paths.font)
    .pipe(gulp.dest('gulp/webfonts/'));
})

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('default', function (cb) {
  return runSequence('clean', [ 'styles', 'scripts', 'fonts', 'html' ], cb);
});

gulp.task('watch', function () {
  gulp.watch(paths.html, ['index']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});
