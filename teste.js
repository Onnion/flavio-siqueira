/*
 * Gulp File
 *
 * In development run:
 * > gulp
 * or
 * > gulp watch
 * In production run:
 * > gulp --prod
 *
 * ###############################
 * Send to AWS S3 AMAZON prodution
 * ###############################
 * > gulp --prod
 * > gulp publish
 */
var gulp = require('gulp');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglyfly = require('gulp-uglyfly');
var beautify = require('gulp-beautify');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');
var stripCssComments = require('gulp-strip-css-comments');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var templateCache = require('gulp-angular-templatecache');
//var inject = require('gulp-inject');
//var es = require('event-stream');
var streamqueue = require('streamqueue');
var runSequence = require('run-sequence');
var gulpIf = require('gulp-if');
var expect = require('gulp-expect-file');
var argv = require('yargs').argv;
var awspublish = require('gulp-awspublish');
var config = require('config');

/*
 * Paths
 */
var paths = {
    scripts:     ['app/**/*.js', '!app/env.default.js', '!app/env.prod.js', 'app/env.js',  '!app/bower_components/**', '!app/libs/**'],
    scriptsProd: ['app/**/*.js', '!app/env.default.js', 'app/env.prod.js',  '!app/env.js', '!app/bower_components/**', '!app/libs/**'],
    images: 'app/images/**/*',
    libStyles: [
        //'app/libs/pace-master/themes/blue/pace-theme-flash.css',
        'app/bower_components/jquery.uniform/dist/css/default.css',
        'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
        'app/bower_components/font-awesome/css/font-awesome.min.css',
        'app/bower_components/offcanvasmenueffects/css/menu_cornerbox.css',
        'app/bower_components/Waves/dist/waves.min.css',
        'app/bower_components/switchery/dist/switchery.min.css',
        'app/bower_components/3d-bold-navigation/css/style.css',
        'app/libs/slidepushmenus/css/component.css',
        'app/bower_components/angular-toastr/dist/angular-toastr.min.css',
        'app/bower_components/morris.js/morris.css',
        'app/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
        'app/bower_components/angular-ui-select/dist/select.min.css',
        /** theme */
        'app/libs/modern/modern.css',
        'app/libs/modern/themes/green.css',
        'app/bower_components/angular-bootstrap-datepicker/dist/angular-bootstrap-datepicker.css',
        'app/bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
        'app/bower_components/angular-datatables/dist/css/angular-datatables.min.css',
        'app/bower_components/textAngular/dist/textAngular.css',
        'node_modules/angular-bootstrap-datetimepicker/src/css/datetimepicker.css',
        'app/bower_components/angular-bootstrap-colorpicker/css/colorpicker.min.css',
    ],
    styles: [
        'app/css/**/*.css'
    ],
    templates: ['app/views/**/*.html'],
    libsScripts: [
    /** Theme libs */
        'app/bower_components/jquery/dist/jquery.min.js',
        'app/bower_components/jquery-ui/jquery-ui.min.js',
        //'app/libs/pace-master/pace.min.js',Erro upload
        'app/bower_components/blockUI/jquery.blockUI.js',
        'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'app/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'app/bower_components/switchery/dist/switchery.min.js',
        'app/bower_components/jquery.uniform/dist/js/jquery.uniform.standalone.js',
        'app/bower_components/offcanvasmenueffects/js/classie.js',
        //'app/bower_components/offcanvasmenueffects/js/main.js',
        'app/bower_components/Waves/dist/waves.min.js',
        'app/bower_components/3d-bold-navigation/js/main.js',
        'app/libs/modern/modern.js',
        'app/bower_components/raphael/raphael.min.js',
        //'app/bower_components/morris.js/morris.min.js',
        'app/bower_components/clipboard/dist/clipboard.min.js',
        'app/bower_components/moment/min/moment.min.js',
        'app/bower_components/moment/locale/pt-br.js',
        'app/bower_components/datatables.net/js/jquery.dataTables.min.js',
        'app/bower_components/highcharts/highstock.js',
        'app/bower_components/highcharts/modules/exporting.js',
        'app/libs/highcharts/locale/pt-br.js',
        'app/libs/notifyjs/notify.js',
    /** Angular libs */
        'app/bower_components/ng-file-upload/ng-file-upload-shim.min.js',
        'app/bower_components/angular/angular.js',
        'app/bower_components/textAngular/dist/textAngularSetup.js',
        'app/bower_components/textAngular/dist/textAngular-rangy.min.js',
        'app/bower_components/textAngular/dist/textAngular-sanitize.js',
        'app/bower_components/textAngular/dist/textAngular.js',
        //'node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
        //'node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js',
        'app/bower_components/angular-resource/angular-resource.min.js',
        'app/bower_components/angular-animate/angular-animate.min.js',
        'app/bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js',
        //'app/bower_components/angular-sanitize/angular-sanitize.min.js',
        'app/bower_components/ng-file-upload/ng-file-upload.min.js',
        'app/bower_components/angular-i18n/angular-locale_pt-br.js',
        'app/libs/angular-bootstrap-datepicker/dist/angular-bootstrap-datepicker.min.js',

        'app/bower_components/angular-ui-router/release/angular-ui-router.js',
        'app/bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',
        'app/bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch.min.js',
        'app/bower_components/chart.js/dist/Chart.min.js',
        'app/bower_components/angular-chart.js/dist/angular-chart.min.js',
        'app/bower_components/angular-datatables/dist/angular-datatables.min.js',
    /** Importação para o Oauth2 */
        'app/bower_components/angular-cookies/angular-cookies.js',
        'app/bower_components/query-string/query-string.js',
        'app/bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
        'app/bower_components/angular-oauth2/dist/angular-oauth2.js',
        'app/bower_components/angular-http-auth/src/http-auth-interceptor.js',
        'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'app/bower_components/angular-bootstrap-confirm/dist/angular-bootstrap-confirm.js',
        'app/bower_components/angular-ui-mask/dist/mask.min.js',
        'app/bower_components/angular-ui-select/dist/select.min.js',
        'app/bower_components/angular-modal-service/dst/angular-modal-service.min.js',
        'app/bower_components/angular-input-masks/angular-input-masks-dependencies.min.js',
        'app/bower_components/angular-input-masks/angular-input-masks.br.min.js',
        //'app/bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js',

    ],
    fonts: [
        'app/bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2',
        'app/bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff',
        'app/bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf2',
        'app/bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf',
        'app/bower_components/font-awesome/fonts/fontawesome-webfont.woff',
        'app/bower_components/font-awesome/fonts/fontawesome-webfont.woff2',
        'app/bower_components/font-awesome/fonts/fontawesome-webfont.ttf'
    ]
};

/*
 * Clear dist folder
 */
gulp.task('clean', function () {
    return gulp.src('./dist/*').pipe(clean());
});

/*
 * Verify *.js
 */
gulp.task('jshint', function () {
    gulp.src(paths.scripts)
        .pipe(expect(paths.scripts))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
 * Angular *.js
 */
gulp.task('fonts', function () {
    gulp.src(paths.fonts)
        .pipe(gulp.dest('./dist/fonts'));
});

/*
 * Angular *.js
 */
gulp.task('scripts', function () {

    var scripts = paths.scripts;

    if(argv.prod){
        scripts = paths.scriptsProd;
    }

    gulp.src(scripts)
        .pipe(expect(scripts))
        .pipe(concat('scripts.min.js'))
        //.pipe(gulpIf(!!argv.prod, uglyfly(), beautify()))
        .pipe(uglyfly())
        .pipe(strip({trim: true}))
        .pipe(gulp.dest('./dist/js'));
});

/*
 * Libs *.js
 */
gulp.task('libs', function () {
    gulp.src(paths.libsScripts)
        .pipe(expect(paths.libsScripts))
        //.pipe(gulpIf(!argv.prod, beautify()))
        //.pipe(strip({trim: true}))
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('./dist/js'));
});

/*
 *
 */
gulp.task('styles', function () {

    var libs = gulp.src(paths.libStyles)
        .pipe(expect(paths.libStyles));

    var styles = gulp.src(paths.styles)
        .pipe(expect(paths.styles))
        .pipe(stripCssComments({preserve: false}))
        .pipe(cleanCss());

    return streamqueue({objectMode: true}, libs, styles)
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});

/*
 *
 */
gulp.task('templates', function () {
    gulp.src('app/views/**/*.html')
        .pipe(strip({trim: true}))
        //.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(templateCache({module: 'managerApp', root:'views/'}))
        .pipe(gulp.dest('./dist/views'));
});

/*
 * Task Images comprime
 */
gulp.task('images', function () {
    gulp.src(paths.images)
        .pipe(gulp.dest('./dist/images'));
});

/*
 * Task only for index
 */
gulp.task('index', function () {
    return gulp.src('app/index.html')
        .pipe(strip({trim: true}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
});

/*
 * Default Task for:
 * DEV
 * PROD
 */
gulp.task('default', function (cb) {
    return runSequence('clean', ['jshint', 'libs', 'scripts', 'styles', 'templates', 'images', 'fonts', 'index'], cb);
});

/*
 *Return the task when a file changes
 */
gulp.task('watch', function () {
    gulp.watch('app/index.html', ['index']);
    gulp.watch(paths.scripts, ['jshint', 'scripts']);
    gulp.watch(paths.libsScripts, ['libs']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.templates, ['templates']);
});

/**
 * Publish system in production
 */
gulp.task('publish', function() {

    var s3Config = config.get('s3');

    var publisher = awspublish.create({
        region: s3Config.region,
        params: {
            Bucket: s3Config.bucket
        },
        httpOptions: { timeout: 300000 },
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey,
        signatureVersion: s3Config.signatureVersion
    }, {
        //cacheFileName: './'
    });

    var headers = {
        'Cache-Control': 'max-age=315360000, no-transform, public'
    };

    return gulp.src('./dist/**')
        // publisher will add Content-Length, Content-Type and headers specified above
        // If not specified it will set x-amz-acl to public-read by default
        .pipe(publisher.publish(headers))
        // create a cache file to speed up consecutive uploads
        .pipe(publisher.cache())
        // print upload updates to console
        .pipe(awspublish.reporter());
});
