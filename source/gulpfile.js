var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../styles/'));
})

gulp.task('watch', function () {
    gulp.watch(['styles/*.scss'], ['sass']);
    gulp.watch('./*.html', ['cp']);
})

gulp.task('cp', function () {
    gulp.src('./*.html')
        .pipe(gulp.dest('../'));
})

gulp.task('default', ['sass', 'watch', 'cp']);
