module.exports = function(grunt) {

        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),

                browserify: {
                        dist: {
                                options: {
                                        watch: true,
                                        keepAlive: true,
                                        transform: [
                                                ['babelify',
                                                        {
                                                                "presets": ["es2015","stage-0"],
                                                                "plugins": [
                                                                        "inferno",
                                                                        "transform-decorators-legacy"
                                                                ]
                                                        }
                                                ]
                                        ]
                                },
                                src: ['app/main/main.jsx'],
                                dest: './static/build/build.js'
                        }
                },
                watch: {
                        browserify: {
                                files: ['app/**/*.jsx'],
                                tasks: ['browserify']
                        }
                }
        });

        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-browserify');
        grunt.registerTask('default', ['watch']);

};
