(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'angular2-swing': 'node_modules/angular2-swing',
        'swing': 'node_modules/swing',
        'lodash': 'node_modules/lodash',
        'hammerjs': 'node_modules/hammerjs',
        'raf': 'node_modules/raf',
        'vendor-prefix': 'node_modules/vendor-prefix',
        'sister': 'node_modules/sister',
        'performance-now': 'node_modules/performance-now',
        'rebound': 'node_modules/rebound'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-swing': {
            main: 'dist/index.js',
            defaultExtension: 'js'
        },
        'swing': {
            main: 'dist/index.js',
            defaultExtension: 'js'
        },
        'hammerjs': {
            main: 'hammer.js',
            defaultExtension: 'js'
        },
        'sister': {
            main: 'src/sister.js',
            defaultExtension: 'js'
        },
        'raf': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'vendor-prefix': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'lodash': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'performance-now': {
            main: 'lib/performance-now.js',
            defaultExtension: 'js'
        },
        'rebound': {
            main: 'rebound.js',
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    ngPackageNames.forEach(function(pkgName) {
        packages[pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
