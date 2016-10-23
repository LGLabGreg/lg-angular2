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

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) =>
    del(['build'], cb));

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () =>
  gulp.src('src/**/*.ts')
      .pipe(tslint())
      .pipe(tslint.report('prose')));

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
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', () =>
    gulp.src(['src/**/*', '!**/*.ts'])
        .pipe(gulp.dest('build')));

/**
 * Copy all required libraries into build directory.
 */
gulp.task('libs', () =>
    gulp.src([
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
        'src/**/*.css'
      ], ['resources'])
      .on('change', browserSync.reload, (e) => {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
      });

    gulp.watch([
        'src/sass/**/*.scss'
      ], ['sass']);
});

gulp.task('serve', ['clean'], () =>
  runSequence(
    'build',
    ['start:server', 'watch']
  ));

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'libs', 'sass'], () => {
    console.log('Building the project ...');
});
