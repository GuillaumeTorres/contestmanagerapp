var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var browserify      = require('browserify'),
    notify          = require('gulp-notify'),
    source          = require('vinyl-source-stream');
var del         = require('del');

var paths = {
  build:          './www/',
  buildAssets:    './www/assets/',
  src:    './src/**/*.*',
  sass: ['./src/scss/**/*.scss'],
  lib: ['./src/lib/**/*.*'],
  images: ['./src/img/*.*'],
  scriptsEntry:   ['./src/js/app.js'], 
  scripts:        ['./src/js/*'], 
  json:        ['./src/**/*.json'],  
  template: ['./src/**/*.html']
};

/**
 * Clean build directory (www)
 */
gulp.task('clean', function(cb) {
  del(paths.build, cb);
});

gulp.task('default', ['sass', 'images', 'lib', 'json', 'views', 'scripts']);
gulp.task('jsScssHtml', ['sass', 'views', 'scripts']);

gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));

gulp.task('sass', function() {
  return gulp
    .src(paths.sass)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.buildAssets + 'css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.buildAssets + 'css'))
});

// images
gulp.task('images', function() {
    return gulp
        .src(paths.images)
        .pipe(gulp.dest(paths.buildAssets + 'img'))
});

// Librairie ionic PAS TOUCHER
gulp.task('lib', function() {
    return gulp
        .src(paths.lib)
        .pipe(gulp.dest(paths.buildAssets + 'lib'))
});

// JSON PARTIE DEV A SUPPR APRES
gulp.task('json', function() {
    return gulp
        .src(paths.json)
        .pipe(gulp.dest(paths.build))
});

// Template
gulp.task('views', function() {
    return gulp
        .src(paths.template)
        .pipe(gulp.dest(paths.build))
});

// Script
gulp.task('scripts', function() {
    return browserify(paths.scriptsEntry)
        .bundle()
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "JS Error"
        }))
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.build));
});
  /**
 * Watch task for development
 */

gulp.task('watch', ['sass', 'images', 'lib', 'json', 'views', 'scripts'], function () {
  gulp.watch(paths.src, ['default']);
});

  /**
 * Watch js html ans scss files task for development
 */
gulp.task('watchJsScssHtml', ['sass', 'views', 'scripts'], function () {
  gulp.watch(paths.src, ['jsScssHtml']);
});


gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
