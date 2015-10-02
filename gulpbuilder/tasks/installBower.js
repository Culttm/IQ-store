var config    = require('../configuration/config');
if(!config.tasks.bower) return


var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('installBower', function() {
	bower();
});
