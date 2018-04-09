
module.exports = function (grunt) {
   grunt.loadNpmTasks('grunt-webfont');

   grunt.registerTask('default', ['webfont']);


   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      webfont: {
         icons: {
            src: 'src/*.svg',
            dest: 'font',
            options: {
               htmlDemoFilename: 'rf-icons-reference',
               engine: 'node',
               font: 'rf-production-font',
               templateOptions: {
                  baseClass: 'rf-icon',
                  classPrefix: 'rf-'
               }
            }
         }
      }

   });
};
