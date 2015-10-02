var config    = require('../configuration/config');
if(!config.tasks.compass) return


var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var env = gutil.env.env;
var path = require('path'); 

var paths = {
  src: path.join(config.root.src, config.tasks.compass.src, '/**/*.' + config.tasks.compass.extensions),
  dest: path.join(config.root.dest, config.tasks.compass.dest)
}


gulp.task('compass', function() {
    
    return  gulp.src(paths.src)
            .pipe(plumber({
                errorHandler: function (error) {
                        console.log(error.message);
                        this.emit('end');
                    }
                })
            )
            .pipe(compass({
                config_file: config.tasks.compass.configuration.configRb,
                css:   config.tasks.compass.configuration.css,
                sass:  config.tasks.compass.configuration.sass,
                httpImagesPath: config.tasks.compass.configuration.httpImagesPath,
                font: config.tasks.compass.configuration.font,
                style: env === 'development' ? 'expanded' : 'compressed',
                sourcemap: env === 'development' ? true : false
            }))
            .on('error', function(err) {
                console.log(err)
            })
            .pipe( gulpif( env === 'development', sourcemaps.init({loadMaps: true})) )
            .pipe( 
                gulpif(
                    env === 'development', sourcemaps.write({
                        includeContent: false
                    })
                )
            )
            .pipe(notify({ message: 'Compass task complete!' }));
                     
});