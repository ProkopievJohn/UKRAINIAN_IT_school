var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    rename = require('gulp-rename'),
    server = require('gulp-server-livereload'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    prettify = require('gulp-html-prettify'),
    stylus = require('gulp-stylus'),
    complexity = require('gulp-complexity'),
    autopolyfiller = require('gulp-autopolyfiller');

// JADE
gulp.task('jade', function () {
  gulp.src('jade/index.jade')
    .pipe(jade())
    .pipe(prettify({indent_char: ' ', indent_size: 3}))
    .pipe(gulp.dest('./'))
});

// STYLUS
gulp.task('styl', function() {
  gulp.src('styl/*.styl')
    .pipe(stylus())
    .pipe(prefix('last 2 versions', '> 1%', 'ie 9'))
    .pipe(concat('style.css'))
    .pipe(csscomb())
    .pipe(gulp.dest('css'));
});

// JAVASCRIPT
gulp.task('js', function () {
  gulp.src('myjs/*.js')
    .pipe(complexity())
    // .pipe(autopolyfiller('result_polyfill_file.js', {
    //     browsers: ['last 4 version', '> 1%', 'ie 9']
    // }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

//SERVER
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      // directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function () {
  gulp.watch('jade/*.jade',['jade']);
  gulp.watch('myjs/*.js',['js']);
  gulp.watch('styl/*.styl',['styl']);
});

gulp.task('default', ['watch', 'jade', 'js', 'styl', 'webserver']);