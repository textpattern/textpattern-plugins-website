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
                templates: 'public/themes/textpattern-themes/'
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
                'jshint',
                'replace'
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
                        src: ['**'],
                        dest: '<%= paths.dest.img %>com/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/assets/img/',
                        src: ['**'],
                        dest: '<%= paths.dest.img %>branding/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/assets/img/apple-touch-icon/textpattern/',
                        src: ['**'],
                        dest: 'public/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/assets/img/favicon/textpattern/',
                        src: ['**'],
                        dest: 'public/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/assets/img/windows-site-tile/textpattern/',
                        src: ['**'],
                        dest: 'public/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/assets/img/misc/',
                        src: ['hi.png', 'hi@2x.png'],
                        dest: 'public/'
                    }
                ]
            }
        },

        // Check code quality of Gruntfile.js and site-specific JavaScript using JSHint.
        jshint: {
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                esversion: 5,
                forin: true,
                globals: {
                    define: true,
                    module: true,
                    require: true,
                    Prism: true,
                    i: true
                },
                latedef: true,
                noarg: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                unused: false,
                strict: false,
                browser: true
            },
            files: [
                'Gruntfile.js'
            ]
        },

        // Generate filename timestamps within templates/mockup files.
        replace: {
            theme: {
                options: {
                    patterns: [
                        {
                            match: 'timestamp',
                            replacement: '<%= opt.timestamp %>'
                        }
                    ]
                },
                files: [
                    // Copy mockups to mockups directory.
                    {
                        expand: true,
                        cwd: '<%= paths.src.mockups %>',
                        src: '**',
                        dest: '<%= paths.dest.mockups %>'
                    },
                    // Copy Textpattern templates to templates directory.
                    {
                        expand: true,
                        cwd: '<%= paths.src.templates %>',
                        src: '**',
                        dest: '<%= paths.dest.templates %>'
                    }
                ]
            }
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
    grunt.registerTask('travis', ['jshint', 'build']);
};
