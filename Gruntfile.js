
module.exports = function (grunt) {
   grunt.loadNpmTasks('grunt-eslint');
   grunt.loadNpmTasks('grunt-webfont');

   grunt.registerTask('default', ['eslint', 'webfont']);


   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      eslint: {
         options: {
            configFile: '.eslintrc'
         },
         target: ['common/**/*.*js']
      },

      webfont: {
         icons: {
            src: 'src/*.svg',
            dest: 'font',
            options: {
               htmlDemoFilename: 'rf-icons-reference',
               engine: 'node',
               font: 'rf-production-font',
               templateOptions: {
                  baseClass: 'rf',
                  classPrefix: 'rf-'
               }
            }
         }
      }

   });
};
