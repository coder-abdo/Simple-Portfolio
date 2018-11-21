var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var image = require('gulp-image');
gulp.task('serve', ['stylus', 'html'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("stylus/**/*.styl", ['stylus']);
    gulp.watch("pug/**/*.pug", ['html']);
    gulp.watch("app/*.js").on('change', browserSync.reload);
});

gulp.task('html', function buildHTML() {
    return gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});
gulp.task('stylus', function(){
    return gulp.src('stylus/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});
gulp.task('image', function () {
    gulp.src('./images/*')
      .pipe(image())
      .pipe(gulp.dest('./images'));
  });
gulp.task('default', ['serve']);