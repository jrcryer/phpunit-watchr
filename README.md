phpunit-watchr
==============

A [NodeJS](http://nodejs.org) app to watch directories and run [PHPUnit](http://www.phpunit.de/) tests.

[![Build Status](https://travis-ci.org/jrcryer/phpunit-watchr.png)](https://travis-ci.org/jrcryer/phpunit-watchr)

*This project is no longer maintained.  Please see: https://github.com/SaschaGalley/grunt-phpunit to automate running your PHPUnit test runner.*

Installation
------------
The following command will install the application. Use `-g` to install as a global binary.

```sh
[sudo] npm install [-g] phpunit-watchr
```

Running The Server
------------------
Running the app is easy. If you installed globally, then starting the app is as easy as:

```sh
phpunit-watchr [path] [phpunit-configuration]
```

The path and phpunit-configuration will default to `./tests` and `--colors` respectively.

### Example usage

Setting path:

```sh
phpunit-watchr './php/tests'
```

Setting paths:

```sh
phpunit-watchr ./php/tests,./tests
```

Setting [PHPUnit configuration](http://www.phpunit.de/manual/current/en/appendixes.configuration.html):

```sh
phpunit-watchr './php/tests' '--strict --colors'
```

Future Features 
---------------

* Notification integration

Licence
-------
This project is licensed under [MIT](https://github.com/jrcryer/phpunit-watchr/blob/master/LICENSE-MIT)
license.
