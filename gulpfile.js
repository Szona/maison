var gulp = require("gulp");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "C:/Users/Dawid/Desktop/maison"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/style/.scss")
        .pipe(sass({
          outputStyle: 'expanded',
          errLogToConsole: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
