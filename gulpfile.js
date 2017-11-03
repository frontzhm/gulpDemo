const gulp = require('gulp')
// 这个插件是用来删除文件或者文件夹的 自行安装
const del = require('del')
// 自动添加前缀
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
// 一般在执行任务的时候 会将上一个build干掉
gulp.task('clean', () => {
    del.sync('build')
})
gulp.task('default',['clean','css'], () => {
    console.log('default task')
    gulp.src(['src/**/*'])
        .pipe(gulp.dest('build'))
})

gulp.task('css',() => {
    gulp.src('src/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions','Firefox > 20'],
            cascade: false

        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css'))
})
gulp.task('watch',() => {
    var watcher = gulp.watch('js/**/*.js', ['default']);
    watcher.on('change', event => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})
