var gulp        = require("gulp"),
    notify      = require('gulp-notify'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat');

var watchList = [
    'public/index.html',
    'public/src/**/my.js',
    'public/src/**/my.css',
];

// listen
gulp.task('connect', function() {
    connect.server({
        root: './public/',
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp
        .watch( watchList, ['compileCss', 'compileJs', 'list'])
        .on('error', notify.onError({
            title: 'watch problem:',
            message: "<%= error %>"
        }));
});




gulp.task('compileCss', function () {
    return gulp.src([
            './public/src/**/my.css',
        ])
        .pipe(concat('sc.css'))
        .pipe(gulp.dest("public"));
});

gulp.task('compileJs', function () {
    return gulp.src([
            './public/src/**/my.js',
        ])
        .pipe(concat('sc.js'))
        .pipe(gulp.dest("public"));
});

gulp.task('list', function () {
    gulp.src(watchList)
        .pipe(connect.reload());
});

gulp.task('buildMainCss', function () {
    return gulp.src([
            './public/dist/jquery/jquery.min.js',
            './public/dist/highlight.js/highlight.pack.js',
            './public/dist/clipboard/clipboard.min.js',
            './public/dist/init.js',
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest("public"));
});
gulp.task('buildMainJs', function () {
    return gulp.src([
            './public/dist/highlight.js/styles/ir_black.css',
        ])
        .pipe(concat('main.css'))
        .pipe(gulp.dest("public"));
});


// --------------------------------------------------------------------------------
gulp.task('default', function() {
    console.log('---- start ----');
    gulp.run('connect', 'watch', 'compileCss', 'compileJs', 'buildMainCss', 'buildMainJs');
});


