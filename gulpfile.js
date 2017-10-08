var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Dynamic server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "product/"
        }
    });
});

// CSS optimization
gulp.task('css', function () {
    gulp.src('product/css/*.css') // путь к папке с файлами с которыми будем работать
        .pipe(concatCss('styles/bundle.css')) // конкатенация css файлов
/*        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))*/
        .pipe(minifyCSS({keepBreaks:true})) // Минификация файлов
        .pipe(gulp.dest('product')); // папка вывода
    browserSync.reload();
});

// HTML optimization
gulp.task('html', function () {
    gulp.src('product/index.html');
    browserSync.reload();
});

// Компилируем SASS
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('product/css'));
});

// Какие файлы отслеживать watch
gulp.task('watch', function () {
    gulp.watch('product/css/*.css', ['css']);
    gulp.watch('product/*.html', ['html']);
    gulp.watch('sass/*.scss', ['sass']);
});

// Запуск по команде gulp запускает все эти модули
gulp.task('default', ['browser-sync', 'watch', 'html', 'sass', 'css']);