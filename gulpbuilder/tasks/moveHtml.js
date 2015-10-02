var config    = require('../configuration/config');
if(!config.tasks.move.html) return

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var path = require('path'); 
var rigger = require('gulp-rigger'); 

var paths = {
  src: path.join(config.root.src, config.tasks.move.html.src, '/*.html'),
  dest: config.root.dest
}


gulp.task('moveHtml', function() {

        gulp.src(paths.src)
            .pipe(plumber({
                errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
            .pipe(rigger())
            .pipe(gulp.dest(paths.dest));
});