var gulp = require('gulp'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify');

gulp.task('default', function () {
	gulp.src(['public/js/Helper.js','public/js/components/Iframe.js','public/js/components/Slider.js','public/js/App.js'])
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/prodaction'));
});