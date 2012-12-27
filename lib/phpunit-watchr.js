#! /usr/bin/env node

var sys    = require('sys');
var watchr = require('watchr');
var exec   = require('child_process').exec;

var paths  = process.argv.length > 2 ? process.argv[2].split(',') : './tests';
var config = process.argv.length > 3 ? process.argv[3] : '--colors';

var runner = function() {

    /**
     * @var array
     */
    var options = ' --colors ';

    /**
     * Called when a file changes
     *
     * @param string change
     * @param string file
     */
    var fileChange = function(change, file) {
        if (!file.match(/\.php$/)) {
            return;
        }

        if (!(change == 'create' || change == 'update')) {
            return;
        }
        
        exec('phpunit ' + options + ' ' + file, function(error, stdout) {
            sys.puts(stdout);
        });
    }; 

    /**
     * Checks whether a version of phpunit exists
     *
     * @param Function callback 
     */
    var checkPhpUnitInstalled = function(callback) {
        exec('phpunit --version', function(error, stdout) {
            if(stdout.match(/^PHPUnit/)) {
                callback();
                return;
            }
            console.log('PHPUnit not found');
        });
    }
 
    /**
     * Set configuration for phpunit
     *
     * @param array config
     */
    var configure = function(config) {
        options = config;
    };
    
    /**
     * Starts watching file system
     *
     * @param array paths
     */
    var start = function(paths) {

        checkPhpUnitInstalled(function() {
            watchr.watch({
                paths: paths,
                listeners: {
                    change: fileChange   
                }   
            });    
        });        
    };

    return {
        setup: configure, 
        watch: start 
    };
}();
runner.setup(config);
runner.watch(paths);
