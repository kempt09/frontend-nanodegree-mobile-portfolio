/**
 * Created by whitneykempton on 11/12/15.
 */
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            jshint:{
                files: ['js/*.js',
                'Gruntfile.js'],
                tasks: ['jshint']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "node": true,
                "esnext": true,
                "curly": false,
                "smarttabs": true,
                "indent": 2,
                "quotmark": "single",
                "globals": {
                    "jQuery": true
                }
            },
            all: ['Gruntfile.js', 'js/*.js']
        },
        uncss: {
            dist: {
                files: {
                    'views/css/tidy.css': ['views/pizza.html']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['views/css/style.css', 'views/css/tidy.css'],
                dest: 'views/css/final.css'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'views/css/production.css': ['views/css/final.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dist: {
                src: 'views/css/production.css',
                dest: 'views/css/compatable.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'views/pizza.html': 'views/pizza.html'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'views/js/main.min.js': ['views/js/main.js']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['htmlmin']);
};