var mainFolders = require('../configuration/folders');
var config    = require('../configuration/config');
if(!config.tasks.bower) return


var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var bower = require('gulp-bower');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var fs    = require('fs'); 
var path = require('path'); 

var paths = {
  src: path.join(config.root.src, config.tasks.bower.src),
  dest: {
    js: path.join(config.root.dest, config.tasks.bower.dest.js),
    css: path.join(config.root.dest, config.tasks.bower.dest.css)
  }
}

var filter = {
  jsFilter: gulpFilter('**/*.js',  {restore: true}),
  cssFilter:  gulpFilter('**/*.css',  {restore: true})
}

gulp.task('bower', function() {

  if (fs.existsSync(paths.src)) { 
      gulp.src(bowerFiles())
          .pipe(filter.jsFilter)
          .pipe(concat(config.tasks.bower.outputName.js))
          .pipe(gulp.dest(paths.dest.js));          
      gulp.src(bowerFiles())
          .pipe(filter.cssFilter)
          .pipe(concat(config.tasks.bower.outputName.css))
          .pipe(gulp.dest(paths.dest.css));
  } 

});
