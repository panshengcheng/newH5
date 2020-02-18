const gulp = require('gulp')
const livereload = require('gulp-livereload')
const exec = require('child_process').exec
const replace = require('gulp-replace')

gulp.task('watch',function(){
  livereload.listen();
  gulp.watch('views/*.html',function(file){
    livereload.changed(file.path)
  })
  gulp.watch('public/js/*.js',function(file){
    livereload.changed(file.path)
  })
  gulp.watch('public/**/*.*',function(file){
      livereload.changed(file.path);
  });
})
gulp.task('start', function() {
  exec('npm start')
})
gulp.task('dist', function() {
  gulp.src('./views/*.html')
    .pipe(replace('src="js', 'src="./js'))
    .pipe(gulp.dest('./dist'))

  gulp.src('./public/js/*.js')
    .pipe(gulp.dest('./dist/js'))

  gulp.src('./public/css/*.css')
    .pipe(gulp.dest('./dist/css'))

  gulp.src('./public/imgs/*.+(jpeg|jpg|png|gif|ico)')
    .pipe(gulp.dest('./dist/imgs'))

  gulp.src('./public/media/*.+(mp4|webm)')
    .pipe(gulp.dest('./dist/media'))
})
gulp.task('default', ['start', 'watch'])
