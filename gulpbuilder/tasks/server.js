var config    = require('../configuration/config');
if(!config.tasks.server && !config.tasks.move.html) return

var gulp = require("gulp");
var browserSync = require('browser-sync').create();

gulp.task('server', [ 'moveHtml' ], function () {

    browserSync.init({
	    port: config.tasks.server.port,
	    server: config.root.dest,
	    https: config.tasks.server.https,
	    notify: config.tasks.server.notify
    });


  // browserSync({
  //   port: config.tasks.server.port,
  //   server: {
  //     baseDir: config.root.dest 
  //   }
  // });
});