
var runner = function(sys, watchr, exec) {

    /**
     * @var string
     */
    var options = '--colors';

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
                return true;
            }
            console.log('PHPUnit not found');
            return false;
        });
    }
 
    /**
     * Set configuration for phpunit
     *
     * @param string config
     */
    var setOptions = function(config) {
        options = config;
    };

    /**
     * Returns the current configuration for phpunit
     *
     * @return string
     */
    var getOptions = function() {
        return options;
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
        setup: setOptions,
        getSettings: getOptions,
        watch: start 
    };
};

module.exports = runner;