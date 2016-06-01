var gulp        = require("gulp"),
    notify      = require('gulp-notify'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat');

var watchList = [
    'sc/**/index.html',
    'sc/**/my.css',
    'sc/**/my.js',
];

// listen
gulp.task('connect', function() {
    connect.server({
        root: './sc/',
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
            './sc/**/my.css',
        ])
        .pipe(concat('sc.css'))
        .pipe(gulp.dest("sc"));
});

gulp.task('compileJs', function () {
    return gulp.src([
            './sc/**/my.js',
        ])
        .pipe(concat('sc.js'))
        .pipe(gulp.dest("sc"));
});

gulp.task('list', function () {
    gulp.src(watchList)
        .pipe(connect.reload());
});


// --------------------------------------------------------------------------------
gulp.task('default', function() {
    console.log('---- start ----');
    gulp.run('connect', 'watch', 'compileCss', 'compileJs');
});


