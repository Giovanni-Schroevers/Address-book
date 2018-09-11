'use strict';

module.exports = function (grunt) {
    // Add configuration, tasks and plugins here
    grunt.initConfig({

        // imports the config data from the package.json
        pkg: grunt.file.readJSON('package.json'),

        sass:{
            dist: {
                files: {
                    'public/stylesheets/style.css' : 'public/stylesheets/sass/style.scss'
                }
            }
        },

        cssmin:{
            target: {
                files: {
                'public/stylesheets/style.css' : 'public/stylesheets/style.css'
                }
            }
        },

        watch:{
            options: {
                livereload: false
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
        }
        // Register the default tasks.

    });
    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};