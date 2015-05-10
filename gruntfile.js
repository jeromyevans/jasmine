/*
 * cashflow-site
 *
 *
 * https://github.com/jeromyevans/cashflow-site
 *
 * Copyright (c) 2014
 * Licensed under the Commercial, Private licenses.
 */

module.exports = function(grunt) {
    'use strict';


    // Project configuration.
    grunt.initConfig({

        // Project metadata
        pkg   : grunt.file.readJSON('package.json'),

        jasmine : {
            // Your project's source files
            src : 'src/**/*.js',
            options : {
                vendor: 'bower_components/requirejs/require.js',
                // Your Jasmine spec files
                specs : 'spec/**/*Spec.js',
                // Your spec helper files
                helpers : 'spec/**/*Helper.js'
            }
        }


    });

    // Load npm plugins to provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['jasmine']);

    grunt.registerTask('default', ['test']);

};