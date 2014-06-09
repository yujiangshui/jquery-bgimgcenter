var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('check',function(){
	gulp.src('./src/jquery.bgimgcenter.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('compress',['check'],function(){
	gulp.src('./src/jquery.bgimgcenter.js')
		.pipe(uglify())
		.pipe(rename('jquery.bgimgcenter.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch',function(){
	gulp.watch('./src/*.js',['compress']);
});

gulp.task('default',['watch']);