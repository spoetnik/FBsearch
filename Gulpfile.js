var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var fs = require("fs");


/**
 * This task generates CSS from all SCSS files and compresses them down.
 */
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      noCache: true,
      outputStyle: "compressed",
      lineNumbers: false,
      loadPath: './build/css/*',
      sourceMap: true
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/css'))
    .pipe(notify({
      title: "SASS Compiled",
      message: "All SASS files have been recompiled to CSS.",
      onLast: true
    }));
});

/**
 * This task minifies javascript in the js/js-src folder and places them in the js directory.
 */
gulp.task('compress', function() {
  return gulp.src('./js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/js'))
    .pipe(notify({
      title: "JS Minified",
      message: "All JS files in the theme have been minified.",
      onLast: true
    }));
});

/**
 * Task when css or js files are changed: recompress the css and js in
 * parallel, then when those are both done reload the browser.
 * Assumes drupal css and js aggregation is off and doesn't clear drupal
 * caches, which makes this run much faster.
 */
gulp.task('cssjs:reload', ['sass', 'compress'], function() {
  browserSync.reload();
});

/**
 * Defines the watcher task.
 */
gulp.task('watch', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });


  // watch scss and js and reload browsers
  gulp.watch(['./scss/**/*.scss', './js/**/*.js'], ['cssjs:reload']);
});

gulp.task('default', ['watch']);
