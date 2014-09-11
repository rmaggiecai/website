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
             },

             watch: {
                    files: ['stylesheets/less/base.less'], // which files to watch
                    tasks: ['less']                
            }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         // grunt.registerTask('watch', ['watch']);
         grunt.registerTask('default', ['less']);

     };