// Import Gulp and Plumber
const gulp = require('gulp');

// SASS compilation task
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

gulp.task('sass', function () {
	gulp.src('./src/css/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist'));
});

// BrowserSync serve task
const browser = require('browser-sync');
const reload = browser.reload;
gulp.task('serve', function () {
	browser({
		port: 4500,
		open: false,
		ghostMode: false,
		server: {
			baseDir: './dist'
		}
	});
});

// Watch task
gulp.task('watch', function () {
	gulp.watch("./src/css/**", ['sass']);
	gulp.watch("./src/html/**", ['html']);
	gulp.watch("./src/js/**", ['js']);
});

// HTML generation task
// var fs = require("fs");
// var inject = require('gulp-inject-string');
gulp.task('html', function () {
	// var cssContent = fs.readFileSync("./dist/main.css", "utf8");
	gulp.src("./src/html/*.html")
		// .pipe(inject.after('style amp-custom>', cssContent))
		.pipe(gulp.dest("./dist"))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('js', function () {
	// var cssContent = fs.readFileSync("./dist/main.css", "utf8");
	gulp.src(["./src/js/*.js"])
		// .pipe(inject.after('style amp-custom>', cssContent))
		.pipe(gulp.dest("./dist/js"))
		.pipe(reload({
			stream: true
		}));
});

// Default task
gulp.task('default', ['sass', 'html','js', 'watch', 'serve']);