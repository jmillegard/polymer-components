var gulp = require('gulp');
var polymerScss = require('gulp-polymer-sass');
 
 gulp.task('scss', function () {
    return gulp.src('*.html')
      .pipe(polymerScss())
      .pipe(gulp.dest('dist/'));
});

gulp.watch('*.html', ['scss']);

gulp.task('default', [ 'scss' ]);
