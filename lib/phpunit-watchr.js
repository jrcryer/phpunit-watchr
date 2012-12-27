#! /usr/bin/env node

var sys    = require('sys');
var watchr = require('watchr');
var exec   = require('child_process').exec;
var runner = require('./runner');
var paths  = process.argv.length > 2 ? process.argv[2].split(',') : './tests';
var config = process.argv.length > 3 ? process.argv[3] : '--colors';

var watcher = new runner(sys, watchr, exec);
watcher.setup(config);
watcher.watch(paths);
