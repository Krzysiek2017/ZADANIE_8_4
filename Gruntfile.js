﻿module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
  			}
  		}
  	},
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
  			}]
  		}
  	},
    
    browserSync: {
      bsFiles: {
        src : ['css/main.css', 'index.html',]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    },
    
     jshint: {
      all: ['js/*.js']
     },

     watch: {
        scripts: {
          files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
            spawn: false,
        },
    }
}
        

  });
    
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'jshint', 'watch']);
};