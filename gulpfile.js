var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip  = require('gulp-strip-css-comments');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');

var paths = {
  html: {
    home: 'assets/html/home.html',
    media: 'assets/html/media.html'
  },
  styles: [
    'assets/css/*.css', 
    'assets/css/home/*.css',
    'assets/css/media/*.css',
    'node_modules/@fortawesome/fontawesome-free/css/all.css'
  ],
  scripts: {
    all: [
    'assets/js/jquery.js',
    'assets/js/!(jquery)*.js'
    ],
    home: 'assets/js/services/home/*.js',
    media: 'assets/js/services/media/*.js'

  },
  font: 'node_modules/@fortawesome/fontawesome-free/webfonts/*.*'
}

gulp.task('clean', () => {
  return gulp.src('./dist/*').pipe(clean());
});

gulp.task('homeHtml', () => {
  return gulp.src(paths.html.home)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('mediaHtml', () => {
  return gulp.src(paths.html.media)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./midia'));
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
  return gulp.src(paths.scripts.all)
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('homeScripts', () => {
  return gulp.src(paths.scripts.home)
    .pipe(uglify())
    .pipe(concat('home.js'))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('mediaScripts', () => {
  return gulp.src(paths.scripts.media)
    .pipe(uglify())
    .pipe(concat('media.js'))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('default', (cb) => {
  return runSequence('clean', [ 
    'styles', 
    'scripts', 
    'fonts', 
    'homeHtml', 
    'mediaHtml', 
    'mediaScripts', 
    'homeScripts' 
  ], cb);
});

gulp.task('watch', () => {
  gulp.watch(paths.html.home, ['homeHtml']);
  gulp.watch(paths.html.media, ['mediaHtml']);
  gulp.watch(paths.scripts.home, ['homeScripts']);
  gulp.watch(paths.scripts.media, ['mediaScripts']);
  gulp.watch(paths.scripts.all, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});
