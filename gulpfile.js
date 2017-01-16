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
var _cfg = (function () {
    var _sf = this;
    _sf._dev = "dev/";
    _sf._def = _sf._dev + "static/";
    _sf._model = _sf._def + "model/";
    // 压缩具体文件
    _sf.allFile_JS = _sf._def + "**/*.js";
    _sf.allFile_RUN = _sf._def + "run.js";
    //
    _sf.allFile_CSS = _sf._def + "**/*.css";
    _sf.allFile_TPL = _sf._def + "**/*.tpl";
    _sf.allFile_HTML = _sf._def + "**/*.html";

    _sf.ext = _sf._def + "ext.js";
    _sf.run = _sf._def + "run.js";
    _sf.app = _sf._def + "app.js";
    _sf.tpl = _sf._def + "tpl/**/*.js";
    _sf.model = _sf._def + "model/**/*.js";
    // 压缩路径
    _sf.minjs = _sf._def + "**/*.js";
    _sf.mincss = _sf._def + "**/*.css";
    _sf.minhtml = _sf._def + "**/*.html";
    _sf.minTpl = _sf._def + "**/*.tpl";
    // 发布路径
    _sf.dist = 'dist/static';
    _sf.distjs = _sf.dist + '/tpl/';
    _sf.distmodel = _sf.dist + '/model/';
    return _sf;
})();

console.log(_cfg.allFile_JS);

var setPath = {
    root: ".",
    dist: "./publish/",
    dist1: ".",
    src: "./adist",
    dev: "./dev"
};

// 压缩js文件
gulp.task('minify_js', function () {
    gulp.src([_cfg.allFile_JS])
            .pipe(uglify())
            .pipe(rev())
            .pipe(gulp.dest(_cfg.dist))
            .pipe(rev.manifest("allFile_JS.json"))
            .pipe(gulp.dest('adist/rev/js'))
            ;
    //gulp.src([_cfg.allFile_RUN]).pipe(gulp.dest(_cfg.dist));
//    gulp.src([_cfg.allFile_RUN])
//            .pipe(rev())
//            .pipe(gulp.dest(_cfg.dist))
//            .pipe(rev.manifest("run.json"))
//            .pipe(gulp.dest('adist/rev/js'))
//            ;
});

gulp.task('minrun', function () {
    gulp.src([_cfg.allFile_RUN]).pipe(gulp.dest(_cfg.dist));
});


// 替换路径
gulp.task('revJs', function () {
    gulp.src([setPath.src + '/rev/**/*.json', setPath.dev + '/index.html'])
            .pipe(revCollector({replaceReved: true}))
            .pipe(gulp.dest(setPath.dist));
});

// 压缩css文件
gulp.task('minify_css', function () {
    gulp.src([_cfg.mincss]).pipe(minifyCss()).pipe(gulp.dest(_cfg.dist));
});

// html 文件
gulp.task('minify_html', function () {
    gulp.src([_cfg.minhtml, _cfg.minTpl]).pipe(minifyHtml()).pipe(gulp.dest(_cfg.dist));
});

// 清除缓存文件
gulp.task("clean", function () {
    gulp.src('./adist').pipe(clean());
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
            ['minify_js', 'revJs', 'minrun'], ['minify_html'],
            done);
});


// 多任务执行
gulp.task('default', ['minify_js', 'revJs', 'minrun', 'minify_html']);
//gulp.task('default', ['build']);