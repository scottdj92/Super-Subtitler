var gulp = require('gulp');
var jshint = require('gulp-jshint');
var child = require('child_process');

/*gulp.task('default', function() {
	console.log('gulp works');
});*/

gulp.task('server', function() {
	var server = child.spawn('node', ['server.js']);
});

gulp.task('js', function() {
	return gulp.src('app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('html', function() {
	return gulp.src('app/**/*.html');
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*.js'], ['js']);
	gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('default', ['server', 'watch'], function() {});