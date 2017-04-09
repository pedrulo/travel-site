var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
console.log("bravo creaste una tarea gulp");


});

gulp.task('html', function(){
console.log("imagine algo espectacular dreado para html");
});

gulp.task('styles', function(){
console.log("imagine algo espectacular en CSS");
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){

		gulp.start('html');

	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});

});