module.exports = function(grunt) {

  // All configuration goes here
  grunt.initConfig({

    jekyll: {
      build : {
        dest: '_site',
        drafts: true
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: '_site/css',
          ext: '.css'
        }]
      }
    },

    watch: {
      sass: {
        files: ['_sass/*.scss', '_sass/*/*.scss', 'css/*.scss'],
        tasks: ['sass']
      },
      jekyll: {
        files: ['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*.md', '_drafts/*.md'],
        tasks: ['jekyll', 'sass']
      }
    },

    browserSync: {
      bsFiles: {
        src : ['_site/css/*.css']
      },
      options: {
        watchTask: true,
        ghostMode: {
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        },
        server: {
          baseDir: '_site'
        }
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Custom tasks
  grunt.registerTask('build', ['jekyll', 'sass']);
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};