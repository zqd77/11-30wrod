var gulp = require('gulp');
var scss = require('gulp-sass');
gulp.task('devscss', function() {
    return gulp.src('./scss/index.scss')
        .pipe(scss())
        .pipe(gulp.dest('./css'))
})
gulp.task('watch', function() {
    return gulp.watch('./scss/*.scss', gulp.series('devscss'))
});