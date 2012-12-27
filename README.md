phpunit-watchr
==============

A [NodeJS](http://nodejs.org) to watch a directory and run [PHPUnit](http://www.phpunit.de/) tests.

Installation
------------
The following command will install the application. Use `-g` to install the server as a global binary.

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

Setting [PHPUnit configuration](http://www.phpunit.de/manual/current/en/appendixes.configuration.html):

```sh
phpunit-watchr './php/tests' '--strict --colors'
```

Future Features 
---------------

* Watching multiple paths
* Notification integration

Licence
-------
This project is licensed under [MIT](https://github.com/azoff/node-osx-notifier/blob/master/LICENSE-MIT)
license.
