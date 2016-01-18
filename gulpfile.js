'use strict'

const
	gulp = require('gulp'),
	mason = require('gulp-mason'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch')

gulp.task('compile', () => pipeCompile(gulp.src(src)))
gulp.task('watch', () => pipeCompile(srcWatch(src)))

const src = 'src/**/*.ms'

const
	srcWatch = glob => gulp.src(glob)
		.pipe(watch(glob, {verbose: true}))
		.pipe(plumber()),

	pipeCompile = stream =>
		stream
		.pipe(sourcemaps.init())
		.pipe(mason({includeAmdefine: true, mslPath: 'msl/lib'}))
		.pipe(sourcemaps.write({
			debug: true,
			includeContent: false,
			sourceRoot: './src'
		}))
		.pipe(gulp.dest('lib'))
