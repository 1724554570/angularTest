var gulp = require('gulp');
var clean = require('gulp-clean'); // 清理
var uglify = require("gulp-uglify"); // 压缩
var minifyCss = require("gulp-minify-css"); // 压缩css
var minifyHtml = require("gulp-minify-html"); // 压缩html
var concat = require("gulp-concat"); // 合并文件
var rename = require('gulp-rename'); // 重命名
var runSequence = require('run-sequence');
/*
 * 打开 node_modules\gulp-rev\index.js
 * 第144行 manifest[originalFile] = revisionedFile; 
 * 更新为: manifest[originalFile] = originalFile + '?v=' + file.revHash;
 * @type {Module gulp-rev|Module gulp-rev}
 */
var rev = require('gulp-rev'); // 
/*
 * 打开 nodemodules\gulp-rev\nodemodules\rev-path\index.js
 * 10行 return filename + '-' + hash + ext; 
 * 更新为: return filename + ext;
 * @type {Module gulp-less|Module gulp-less}
 */

/**
 * 打开 node_modules\gulp-rev-collector\index.js
 * 31行 if ( path.basename(json[key]).replace(new RegExp( opts.revSuffix ), '' ) !== path.basename(key) ) { 
 * 更新为: if ( path.basename(json[key]).split('?')[0] !== path.basename(key) ) {
 * @type {Module gulp-rev-collector|Module gulp-rev-collector}
 */
var revCollector = require('gulp-rev-collector'); //- 路径替换


var
        less = require('gulp-less'),
        LessPluginCleanCSS = require('less-plugin-clean-css'),
        LessPluginAutoPrefix = require('less-plugin-autoprefix'),
        cleancss = new LessPluginCleanCSS({advanced: true}),
        livereload = require('gulp-livereload'),
        autoprefix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]})
        ;
var setConfig = function () {
    this._default = "dev/";
    this._static = this._default + "static/";
    this._model = this._default + "static/model/";
    this.minjs = this._static + "**/*.js";

    this.ext = this._static + "ext.js";
    this.run = this._static + "run.js";
    this.app = this._static + "app.js";
    this.tpl = this._static + "tpl/**/*.js";
    this.model = this._static + "model/**/*.js";

    this.mincss = this._static + "**/*.css";

    this.minhtml = this._static + "**/*.html";

    this.dist = 'publish/static';
    this.distjs = 'publish/static/tpl/';
    this.distmodel = 'publish/static/model/';
};
var getConfig = new setConfig();

// 压缩js文件
gulp.task('minify_js', function () {
    gulp.src([getConfig.ext, getConfig.app])
            .pipe(uglify())
            .pipe(gulp.dest(getConfig.dist))
            ;
    //gulp.src([getConfig.run]).pipe(gulp.dest(getConfig.dist));
    gulp.src([getConfig.tpl])
            .pipe(uglify())
            .pipe(gulp.dest(getConfig.distjs))
            ;
    gulp.src([getConfig.model])
            .pipe(uglify())
            .pipe(rev())
            .pipe(gulp.dest(getConfig.distmodel))
            .pipe(rev.manifest())
            .pipe(gulp.dest('adist/rev/js'))
            ;
});
var setPath = {
    root: ".",
    dist: "./publish/",
    src: ".",
    dev: "dev"
};

// 替换路径
gulp.task('revJs', function () {
    return gulp.src([setPath.src + '/rev/**/*.json', setPath.dev + '/static/**/*.js'])
            .pipe(revCollector())
            .pipe(gulp.dest(setPath.dist + '/static'));
});

// 压缩css文件
gulp.task('minify_css', function () {
    gulp.src([getConfig.mincss]).pipe(minifyCss()).pipe(gulp.dest(getConfig.dist));
});

// html 文件
gulp.task('minify_html', function () {
    gulp.src([getConfig.minhtml]).pipe(minifyHtml()).pipe(gulp.dest(getConfig.dist));
});

// 清除缓存文件
gulp.task("clean", function () {
    return gulp.src('./publish/static').pipe(clean());
});

var path = {
    src: './devSea/static',
    dist: './devSea/static'
};

gulp.task('less', function () {
    var timestamp = +new Date();
    return gulp.src(path.src + '/less/**/*.less')
            .pipe(less({
                plugins: [autoprefix, cleancss]
            }))
            .pipe(concat('backend.css'))
            //.pipe(minifyCss())
            //.pipe(rev())
            .pipe(gulp.dest(path.dist + '/css'));
    //.pipe(rev.manifest())
    //.pipe(gulp.dest(path.src + '/rev/css'));
});

//正式构建
gulp.task('build', function (done) {
    runSequence(
            ['minify_js', 'revJs'],
            done);
});


// 多任务执行
//gulp.task('default', [
//    'clean',
//    'less',
//    'minify_css',
//    'minify_js',
//    'minify_html'
//]);
gulp.task('default', ['build']);