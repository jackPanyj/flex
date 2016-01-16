var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var beautify = require('gulp-minify-css');
var wrap = require('gulp-wrap');
var browserSync = require('browser-sync');

gulp.task('build', function () {
   gulp.src('pages/*.html')
       .pipe(wrap({src: 'layout/default.html'}))
       .pipe(gulp.dest('..'));
})

gulp.task('cp',function() {
    gulp.src(['js/*.js', 'assets/*'], {base: '.'})
    .pipe(gulp.dest('..'));
})

gulp.task('rebuild',['build', 'cp'],browserSync.reload);

gulp.task('browser-sync', ['sass', 'build', 'cp'], function() {
    browserSync({
        server: {
            baseDir: "../"
        }
    });
    gulp.watch(['styles/*.scss'], ['sass']);
    gulp.watch(['./**/*.html', './js/*.js'], ['rebuild']);
});

gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass()).on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(prefixer())
	      .pipe(beautify())
        .pipe(gulp.dest('../styles/'))
        .pipe(browserSync.stream());
})


gulp.task('default', ['browser-sync']);
