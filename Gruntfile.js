module.exports = function (grunt)
{
    'use strict';

    // Load all Grunt tasks.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Set up paths.
        paths: {
            src: {
                mockups: 'src/mockups/',
                templates: 'src/templates/'
            },
            dest: {
                img: 'public/assets/img/',
                mockups: 'public/mockups/',
                templates: 'public/themes/textpattern-plugins/'
            }
        },

        // Set up timestamp.
        opt : {
            timestamp: '<%= new Date().getTime() %>'
        },

        // Clean distribution directories/files to start afresh.
        clean: [
            '<%= paths.dest.img %>',
            '<%= paths.dest.mockups %>*/',
            '<%= paths.dest.templates %>'
        ],

        // Run some tasks in parallel to speed up the build process.
        concurrent: {
            dist: [
                'copy',
                'jshint'
            ]
        },

        // Copy files.
        copy: {
            // Copy Textpattern branding assets.
            img: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets/img/',
                        src: '**',
                        dest: '<%= paths.dest.img %>'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/img/favicons/',
                        src: '**',
                        dest: 'public/'
                    }
                ]
            },
            // Copy Textpattern theme and HTML mockups.
            theme: {
                files: [
                    // Copy mockups to mockups directory.
                    {
                        expand: true,
                        cwd: '<%= paths.src.mockups %>',
                        src: '**',
                        dest: '<%= paths.dest.mockups %>'
                    },
                    // Copy Textpattern templates to themes directory.
                    {
                        expand: true,
                        cwd: '<%= paths.src.templates %>',
                        src: '**',
                        dest: '<%= paths.dest.templates %>'
                    }
                ]
            }
        },

        // Check code quality of Gruntfile.js and site-specific JavaScript using JSHint.
        jshint: {
            options: {
                bitwise: true,
                browser: true,
                curly: true,
                eqeqeq: true,
                esversion: 6,
                forin: true,
                globals: {
                    define: true,
                    module: true,
                    require: true
                },
                latedef: true,
                noarg: true,
                nonew: true,
                strict: false,
                undef: true,
                unused: false
            },
            files: [
                'Gruntfile.js'
            ]
        },

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            html: {
                files: [
                    '<%= paths.src.mockups %>**',
                    '<%= paths.src.templates %>**'
                ],
                tasks: 'replace'
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['clean', 'concurrent']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('travis', ['build']);
};
