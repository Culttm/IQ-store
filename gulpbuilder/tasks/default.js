var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(){
		runSequence(
			// 'installBower',
			[
			    'moveFonts',
			    'moveAssets',
			    'moveImages',
			    'moveHtml',
		    	'coffee'
			],
			'bower',
		    'sprite',
		    'cleanCss',
		    'compass',
		    'server',
		    'watch'
	    )
	}
);