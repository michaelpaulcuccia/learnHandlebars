const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1. where is scss file
    return gulp.src('./scss/**/*.scss')
    //2. pass file through sass compiler
    .pipe(sass().on('error', sass.logError))
    //3. where to save compiled css
    .pipe(gulp.dest('./public/css'))
    //.4 stream changes to all browsers
    .pipe(browserSync.stream());
}

//watches for changes and automatically updates
function watch() {

    // browserSync.init({
    //     server: {
    //         baseDir: './'
    //     }
    // });

    //when anything changes, call style()
    gulp.watch('./scss/**/*.scss', style);
    //changes to hbs files, refresh
    gulp.watch('./views/**/*.handlebars').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;