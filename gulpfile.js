const babelify   = require('babelify');
const browserify = require('browserify');
const gulp       = require('gulp');
const source     = require('vinyl-source-stream');

gulp.task(
    'build',
    () => browserify('index.js')
        .transform(babelify, {presets: 'es2015'})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./'))
);
