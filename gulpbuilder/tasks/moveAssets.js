var config    = require('../configuration/config');
if(!config.tasks.move.assets) return

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var path = require('path');

var paths = {
  src: path.join(config.root.src, config.tasks.move.assets.folder, '**/*.*'),
  dest: path.join(config.root.dest, config.tasks.move.assets.folder)
};


gulp.task('moveAssets', function() {
 
    return  gulp.src(paths.src)
            .pipe(plumber({
                errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(changed(paths.dest))
            .pipe(imagemin())
            .pipe(gulp.dest(paths.dest));
});