const gulp = require('gulp'),
  gulpSass = require('gulp-sass'),
  del = require('del'),
  browserSync = require('browser-sync'),
  uglifycss = require('gulp-uglifycss'),
  imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('images', function() {
 return gulp.src('src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});

gulp.task('clean', function () {
  return del.sync('dist/');
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  })
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});


gulp.task('build', ['clean', 'images','sass'], function () {

  gulp.src([
    'src/css/*.css'
  ])
    .pipe(gulp.dest('dist/css'));

  gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'));


  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));

  gulp.src('src/slick/**/*')
    .pipe(gulp.dest('dist/slick'));
});
