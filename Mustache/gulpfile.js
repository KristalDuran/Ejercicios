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
gulp.task('html', function () {
	gulp.src("./src/html/*.html")
		.pipe(gulp.dest("./dist"))
		.pipe(reload({
			stream: true
		}));
});

//js task
gulp.task('js', function () {
	gulp.src(["./src/js/*.js"])
		.pipe(gulp.dest("./dist/js"))
		.pipe(reload({
			stream: true
		}));
});

//mustache task
gulp.task('mustache', function () {
	gulp.src(["./src/mustache/*.mustache"])
		.pipe(gulp.dest("./dist/mustache"))
		.pipe(reload({
			stream: true
		}));
});

// Default task
gulp.task('default', ['sass', 'html','js', 'mustache', 'watch', 'serve']);