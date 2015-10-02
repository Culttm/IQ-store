var config    = require('../configuration/config');
if(!config.tasks.coffee) return


var gulp = require('gulp');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var env = gutil.env.env;
var path = require('path');


var paths = {
  src: path.join(config.root.src, config.tasks.coffee.src, '/**/*.' + config.tasks.coffee.extensions),
  dest: path.join(config.root.dest, config.tasks.coffee.dest)
};


gulp.task('coffee', function() {
  gulp.src(paths.src)
    .pipe(plumber({
        errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe( gulpif( env === 'development', sourcemaps.init({loadMaps: true})) )
    .pipe(coffee({bare: true}))
    .pipe( 
        gulpif(
            env === 'development', sourcemaps.write({
                includeContent:false
            })
        )
    ) 
    .on('error', function(err) {
        console.log(err)
    })      
    .pipe(concat(config.tasks.coffee.outputName))
    .pipe( gulpif( env === 'production', uglify()))
    .pipe(gulp.dest(paths.dest))
    .pipe(notify({ message: 'Coffee task complete!' }))
});
