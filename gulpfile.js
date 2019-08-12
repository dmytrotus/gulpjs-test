const gulp = require('gulp');
      concat = require('gulp-concat');
      minify = require('gulp-minify');


gulp.task('concat', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('minify', async function () {
  gulp.src('./dist/all.js') 
  .pipe(minify())
  .pipe(gulp.dest('./dist/all-min.js'));
});

/*
Не знаю под какой ряд вам надо, но если у вас gulp 4 и вам нужно запустить параллельно несколько тасков, то
*/

//gulp.task('default', gulp.parallel('concat', 'minify'));

/*Если нужно запускать поочередно в указанном порядке, то*/

//gulp.task('default', gulp.series('concat', 'minify'));