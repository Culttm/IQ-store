var config    = require('../configuration/config');

var gulp = require("gulp");
var watch  = require('gulp-watch')
var path   = require('path')



gulp.task('watch', function () {
	watch(path.join(config.root.src, config.tasks.move.images.folder, '*.*'), function(){
		gulp.start(['moveImages'])
	});

	watch(path.join(config.root.src, config.tasks.sprite.src, config.tasks.sprite.folder, '/*.' + config.tasks.sprite.extensions), function(){
		gulp.start(['sprite'])
	});

	watch(path.join(config.root.src, config.tasks.move.assets.folder, '**/*.*'), function(){
		gulp.start('moveAssets')
	});

	watch(path.join(config.root.src, config.tasks.move.fonts.folder, '**/*.*'), function(){
		gulp.start('moveFonts')
	});

	watch(path.join(config.root.src, config.tasks.coffee.src, '**/*.' + config.tasks.coffee.extensions), function(){
		gulp.start('coffee')
	});

	watch(path.join(config.root.src, config.tasks.move.html.src, '**/*.html'), function(){
		gulp.start('moveHtml')
	});

	watch(path.join(config.root.src, config.tasks.compass.src, '**/*.' + config.tasks.compass.extensions), function(){
		gulp.start('compass')
	});
});