'use strict'

const
	gulp = require('gulp'),
	mason = require('gulp-mason'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch')

gulp.task('default', () => pipeCompile(srcWatch(src)))
gulp.task('all', () => pipeCompile(gulp.src(src)))

const src = 'src/**/*.ms'

const
	srcWatch = glob => gulp.src(glob)
		.pipe(watch(glob, { verbose: true }))
		.pipe(plumber()),

	pipeCompile = stream =>
		stream
		.pipe(sourcemaps.init())
		.pipe(mason({ forceNonLazyModule: true }))
		.pipe(sourcemaps.write({
			debug: true,
			includeContent: false,
			sourceRoot: './src'
		}))
		.pipe(gulp.dest('dist'))
