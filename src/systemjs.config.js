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
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
