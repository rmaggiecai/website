module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 development: {
                     options: {
                         paths: ["stylesheets/css"]
                     },
                     files: {"stylesheets/css/base.css": "stylesheets/less/base.less"}
                 },
                 production: {
                     options: {
                         paths: ["stylesheets/css"],
                         cleancss: true
                     },
                     files: {"stylesheets/css/base.css": "stylesheets/less/base.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.registerTask('default', ['less']);
     };