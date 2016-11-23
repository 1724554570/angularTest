var gulp = require('gulp');
var clean = require('gulp-clean'); // 清理
var uglify = require("gulp-uglify"); // 压缩
var minifyCss = require("gulp-minify-css"); // 压缩css
var minifyHtml = require("gulp-minify-html"); // 压缩html
var concat = require("gulp-concat"); // 合并文件
var rename = require('gulp-rename'); // 重命名
var rev = require('gulp-rev'); // 
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
    gulp.src([getConfig.ext, getConfig.app]).pipe(uglify()).pipe(gulp.dest(getConfig.dist));
    //gulp.src([getConfig.run]).pipe(gulp.dest(getConfig.dist));
    gulp.src([getConfig.tpl]).pipe(uglify()).pipe(gulp.dest(getConfig.distjs));
    gulp.src([getConfig.model]).pipe(uglify()).pipe(gulp.dest(getConfig.distmodel));
});

// 压缩css文件
gulp.task('minify_css', function () {
    gulp.src([getConfig.mincss]).pipe(minifyCss()).pipe(gulp.dest(getConfig.dist));
});

// html 文件
gulp.task('minify_html', function () {
    gulp.src([getConfig.minhtml]).pipe(minifyHtml()).pipe(gulp.dest(getConfig.dist));
});

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

// 多任务执行
gulp.task('default', [
    'less',
            //'clean',
            //'minify_css',
            //'minify_js',
            //'minify_html'
]);