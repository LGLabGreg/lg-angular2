const gulp = require('gulp');
const del = require('del');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync').create('Angular2 server');
const fallback = require('connect-history-api-fallback');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');

const tsProject = tsc.createProject('tsconfig.json');


//prod
const shell = require('gulp-shell');
const htmlreplace = require('gulp-html-replace');
const Builder = require('systemjs-builder');


const bundleHash = new Date().getTime();
const mainBundleName = 'js/' + bundleHash + '.main.bundle.js';
const vendorBundleName = 'js/' + bundleHash + '.vendor.bundle.js';

/////////////////////////////////////////////////////
//HELPERS
/////////////////////////////////////////////////////

/**
 * Remove build/dist directories.
 */
gulp.task('clean', ['clean:build', 'clean:dist']);

gulp.task('clean:build', (cb) =>
    del(['build'], cb));

gulp.task('clean:dist', (cb) =>
    del(['dist'], cb));

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () =>
  gulp.src('src/**/*.ts')
      .pipe(tslint())
      .pipe(tslint.report('prose')));


/////////////////////////////////////////////////////
//DEVELOPMENT TASKS
/////////////////////////////////////////////////////

/**
 * Start serving the build folder
 */
gulp.task('start:server', () => {
  browserSync.init({
    server: {
      baseDir: './build/',
      https: false,
      open: false,
      middleware: [
        fallback({
          index: '/index.html',
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
        })
      ]
    }
  });
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', () => {
    gulp.watch([
        'src/**/*.ts'
      ], ['compile'])
      .on('change', browserSync.reload, (e) => {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });

    gulp.watch([
        'src/**/*.html',
        'src/**/*.css',
        'src/images/*'
      ], ['resources:build'])
      .on('change', browserSync.reload, (e) => {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
      });

    gulp.watch([
        'src/sass/**/*.scss'
      ], ['sass']).on('change', browserSync.reload, (e) => {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
      });
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

/**
 * Compile sass into build directory.
 */
gulp.task('sass', function () {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

/**
 * Copy all resources:build that are not TypeScript files into build directory.
 */
gulp.task('resources:build', () =>
    gulp.src(['src/**/*', '!**/*.ts', '!src/{sass,sass/**}'])
        .pipe(gulp.dest('build')));

/**
 * Copy all required libraries into build directory.
 */
gulp.task('libs', () =>
    gulp.src([
        'core-js/client/shim.min.js',
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'angular2-in-memory-web-api',
      ], {cwd: 'node_modules/**'}) /* Glob required here. */
      .pipe(gulp.dest('build/lib')));

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources:build', 'libs', 'sass'], () => {
    console.log('Building the project ...');
});


/**
 * Main development task
 */
gulp.task('serve', ['clean'], () =>
  runSequence(
    'build',
    ['start:server', 'watch']
  ));


/////////////////////////////////////////////////////
//PRODUCTION TASKS
/////////////////////////////////////////////////////

gulp.task('bundle', ['bundle:vendor', 'bundle:app'], function () {
    return gulp.src('build/index.html')
        .pipe(htmlreplace({
            'app': mainBundleName,
            'vendor': vendorBundleName
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle:vendor', function () {
  const builder = new Builder();
  builder.config(
    {
      map: {
        'core-js-shim':'node_modules/core-js/client/shim.min.js',
        'es6-shim':'node_modules/es6-shim/es6-shim.min.js',
        'zone':'node_modules/zone.js/dist/zone.js',
        'reflect':'node_modules/reflect-metadata/Reflect.js'
      }
    }
  );
  return builder
      .buildStatic('build/app/vendor.js', './dist/' + vendorBundleName)
      .catch(function (err) {
          console.log('Vendor bundle error');
          console.log(err);
      });
});

gulp.task('bundle:app', function () {
  
  const builder = new Builder();
  builder.config(
    {
      paths: {'*': '*.js'},
      map: {
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd',
        '@angular/upgrade': 'node_modules/@angular/upgrade/bundles/upgrade.umd',
        'rxjs': 'node_modules/rxjs',
      }
    }
  );
  return builder
      .buildStatic('build/app/main', './dist/' + mainBundleName)
      .catch(function (err) {
          console.log('App bundle error');
          console.log(err);
      });
      
});

/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task('resources:dist', () =>
    gulp.src(['build/**/*', '!build/{lib,lib/**}', '!build/{app,app/**}', '!**/*.js', '!**/*.html'])
        .pipe(gulp.dest('dist')));


/**
 * Main production task
 */

gulp.task('dist', function(done) {
    runSequence('clean', 'build', 'bundle', 'resources:dist', 'clean:build', function() {
        done();
    });
});

