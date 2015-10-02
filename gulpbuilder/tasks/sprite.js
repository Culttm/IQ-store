var mainFolders = require('../configuration/folders');
var config    = require('../configuration/config');
if(!config.tasks.sprite) return


var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var path = require('path'); 

var paths = {
  src: path.join(config.root.src, config.tasks.sprite.src, config.tasks.sprite.folder, '/*.' + config.tasks.sprite.extensions),
  dest: {
    img: path.join(config.root.dest, config.tasks.sprite.dest.img),
    css: path.join(config.root.src, config.tasks.sprite.dest.css)
  }
}



gulp.task('sprite', function() {
    console.log(paths)
    var spriteData = 
        gulp.src(paths.src)
            .pipe(spritesmith({
                imgName: config.tasks.sprite.configuration.imgName,
                cssName: config.tasks.sprite.configuration.cssName,
                cssFormat : config.tasks.sprite.configuration.cssFormat,
                algorithm: config.tasks.sprite.configuration.algorithm,
                imgPath: config.tasks.sprite.configuration.imgPath
            }));

    spriteData.img.pipe(gulp.dest(paths.dest.img)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(paths.dest.css)); // output path for the CSS
});