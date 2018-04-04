
module.exports = function (grunt) {
   grunt.loadNpmTasks('grunt-eslint');
   grunt.loadNpmTasks('grunt-grunticon');

   grunt.registerTask('default', ['eslint', 'grunticon:myIcons']);


   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      eslint: {
         options: {
            configFile: '.eslintrc'
         },
         target: ['common/**/*.*js']
      },

      grunticon: {
         myIcons: {
            files: [{
               expand: true,
               cwd: './src',
               src: '*.svg',
               dest: 'font'
            }],
            options: {
               datasvgcss: 'rf-production-font-svg.css',
               datapngcss: 'rf-production-font-png.css',
               urlpngcss: 'png-fallback.css',
               previewhtml: 'icons-reference.html',
               pngfolder: 'png',
               cssprefix: '.rf-',
               previewTemplate: './view/reference-template.hbs',
               prefixClass: '.rf .rf-',
               enhanceSVG: true,
               corsEmbed: true
            }
         }
      }


   });
};
