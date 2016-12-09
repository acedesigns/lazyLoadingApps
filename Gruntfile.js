
/* =============================================================================
 *  Gruntfile.js
 * =============================================================================
 */

 module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app'
  };

   // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    appSetting: appConfig,

    watch : {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= appSetting.app %>/{,*/}*.html',
          '<%= appSetting.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      styles: {
        files: ['<%= appSetting.app %>/assets/css/{,*/}*.css'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      js: {
        files: ['<%= appSetting.app %>/assets/js/{,*/}*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    wiredep: {
      app: {
        src: ['<%= appSetting.app %>/index.html'],
        ignorePath:  /\.\.\//
      }
    },
    /*Combining files */
    concat: {
      js: {
        src: ['<%= appSetting.app %>/assets/js/{,*/}*.js'],
        dest: '<%= appSetting.app %>/dest/js/concat.js'
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 1881,
        hostname: 'localhost',
        livereload: 35722
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect().use(
                '/app/vendor',
                connect.static('./app/vendor')
              ),
              connect().use(
                '/app/css',
                connect.static('./app/css')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'wiredep',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('concat', 'Compile then', function (target) {
    grunt.task.run([
      'concat',
    ]);
  });

  grunt.registerTask('install', 'install the backend and frontend dependencies', function() {
    var exec = require('child_process').exec;
    var cb = this.async();
    exec('bower install', {cwd: './frontend'}, function(err, stdout, stderr) {
      console.log(stdout);
      cb();
    });
  });
};
