var config    = require('../configuration/config');
if(!config.tasks.clean.fonts) return

var gulp = require('gulp');
var clean = require('gulp-clean');
var path = require('path'); 

var paths = {
  src: path.join(config.root.dest, config.tasks.clean.fonts.folder, '/**/*')
}

gulp.task('cleanFonts', function () {
	console.log(paths)
	return gulp.src(paths.src, {read: false})
		.pipe(clean());
});