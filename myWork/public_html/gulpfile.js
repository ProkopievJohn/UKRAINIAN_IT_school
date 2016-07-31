var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	filesJS = [
		// 'public/js/Helper.js',
		// 'public/js/App.js',
		// 'public/js/components/Iframe.js',
		// 'public/js/components/Slider.js',
		// 'public/js/components/Weather.js',
		// 'public/js/components/Currency.js'
		'public/js/*js',
		'public/js/components/*js'
	];

gulp.task('js', function () {
	return gulp.src(filesJS)
		.pipe(concat('bundle.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('public/prodaction'));
});

gulp.task('watch', function () {
	gulp.watch(filesJS, ['js']);
});

gulp.task('default', ['watch','js']);
