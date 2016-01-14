var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var beautify = require('gulp-minify-css');
var wrap = require('gulp-wrap');

gulp.task('build', function () {
   gulp.src('pages/*.html')
       .pipe(wrap({src: 'layout/default.html'}))
       .pipe(gulp.dest('..'));
})

gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(prefixer())
	.pipe(beautify())
        .pipe(gulp.dest('../styles/'));
})

gulp.task('watch', function () {
    gulp.watch(['styles/*.scss'], ['sass']);
    gulp.watch('./**/*.html', ['build']);
})

gulp.task('default', ['sass', 'watch', 'build']);
