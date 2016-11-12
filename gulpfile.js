var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

gulp.task('default', function () {
    log("gulp [options]");
    log("[options] = templatecache");
});

gulp.task('build', ['concat-app', 'concat-vendor'], function () {
    log("Bundling Files");
});

gulp.task('concat-app', ['templatecache'], function (cb) {
    return gulp.src(['app/**/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./'));
});


gulp.task('concat-vendor', ['templatecache'], function (cb) {
    return gulp.src([
        'js/jquery-2.1.1.js',
        'js/jquery.backstretch.min.js',
        'js/owl.carousel.min.js',
        'js/angular.min.js',
        'js/angular-animate.min.js',
        ])
        .pipe(concat('vendor.bundle.js'))
        .pipe(gulp.dest('./'));
});


gulp.task('concat-css', ['templatecache'], function (cb) {
    return gulp.src([
        'css/bootstrap.css',
        'css/owl.carousel.css',
        'css/owl.theme.css',
        'font-awesome/css/font-awesome.css',
        'css/animate.css',
        'css/mystyle.css',
        ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./'));
});


gulp.task('templatecache', function () {
    log("Creating Angular Cache");
    return gulp.src('app/**/*.tpl.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(templateCache('app.templates.js', { module: 'app' }))
        .pipe(gulp.dest('app'));
});

gulp.task('clean', function () {
    log("clean");
});


/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                //$.util.log($.util.colors.blue(msg[item]));
                console.log(msg[item]);
            }
        }
    } else {
        // $.util.log($.util.colors.blue(msg));
        console.log(msg);
    }
}