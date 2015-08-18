module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
      },
      build: {
        src: 'src/griddy.less',
        dest: 'build/griddy.css'
      }
    },
    clean: ["build"],
    cssmin: {
      options:{
      },
      build: {
        src: 'build/griddy.css',
        dest: 'build/griddy.min.css'
      }
    },
    watch: {
      less: {
        files: ['src/griddy.less'],
        tasks:['default'],
        options: {
          reload: true
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean','less', 'cssmin', 'watch']);

};