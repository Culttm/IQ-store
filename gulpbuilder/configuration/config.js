/*
  The configuration for gulp tasks;
*/
var mainFolders = require('./folders');
var path = require('path'); 

module.exports = {
  root: {
    src: mainFolders.src,
    dest: mainFolders.dest,
  },
  tasks:{
    server:{
      port: 9000,
      https: false,
      notify: false
    },
  	coffee:{
      outputName : 'main.js',
      extensions: 'coffee',
      src: mainFolders.coffee,
      dest: mainFolders.js
  	},
  	compass: {
      src: mainFolders.sass,
      dest: mainFolders.css,	
      configuration:{
      	configRb: './config.rb',
      	httpImagesPath: '../' + mainFolders.images,
        css: path.join(mainFolders.dest, mainFolders.css),
        sass: path.join(mainFolders.src, mainFolders.sass),
      	font: path.join(mainFolders.dest, mainFolders.fonts)
      }, 
      extensions: 'scss'
  	},
    sprite:{
      src: mainFolders.images,
      folder: 'sp',
      dest: {
        img: mainFolders.images,
        css: mainFolders.sass 
      },
      outputName : 'sprite.png',
      extensions: 'png',
      configuration: {
        imgName: 'sprite.png',
        cssName: '_sprites.scss',
        cssFormat : 'scss',
        algorithm: 'binary-tree',
        imgPath: '../' + mainFolders.images + '/sprite.png'
      }
    },
    bower: {
      src: mainFolders.bower,
      dest: {
        js: mainFolders.js,
        css: mainFolders.css
      },
      outputName: {
        js: 'libs.js',
        css: 'libs.css'
      }
    },
    clean: {
      assets: {
        folder: mainFolders.assets
      },
      css: {
        folder: mainFolders.css
      },
      fonts: {
        folder: mainFolders.fonts
      },
      images: {
        folder: mainFolders.images
      },
      html: {
        folder: mainFolders.html
      }
      
    },
    move: {
      assets: {
        folder: mainFolders.assets
      },
      css: {
        folder: mainFolders.css
      },
      fonts: {
        folder: mainFolders.fonts
      },
      images: {
        folder: mainFolders.images
      },
      html: {
        src: mainFolders.html,
        folder: mainFolders.dest
      }
    }
  }
}