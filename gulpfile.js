var gulp = require('gulp');
var clean = require('gulp-clean'); // 清理
var uglify = require("gulp-uglify"); // 压缩
var minifyCss = require("gulp-minify-css"); // 压缩css
var minifyHtml = require("gulp-minify-html"); // 压缩html
var concat = require("gulp-concat"); // 合并文件
var rename = require('gulp-rename'); // 重命名
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var notify = require('gulp-notify');
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
// less 文件编译
var less = require('gulp-less');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var cleancss = new LessPluginCleanCSS({advanced: true});
var livereload = require('gulp-livereload');
var autoprefix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
var _cfg = (function () {
    var _sf = this;
    _sf._dev = "dev/";
    _sf._def = _sf._dev + "static/";
    _sf._model = _sf._def + "model/";
    // 压缩具体文件
    _sf.all_JS = _sf._dev + "**/*.js";
    _sf.allFile_JS = _sf._def + "**/*.js";
    _sf.allFile_RUN = _sf._def + "run.js";
    // 压缩路径
    _sf.allFile_CSS = _sf._def + "**/*.css";
    _sf.allFile_TPL = _sf._def + "**/*.tpl";
    _sf.allFile_HTML = _sf._def + "**/*.html";
    _sf.allFile_XHTML = _sf._def + "**/*.xhtml";
    // 图片
    _sf.allFile_JPG = _sf._dev + "**/*.jpg";
    _sf.allFile_PNG = _sf._dev + "**/*.png";
    _sf.allFile_GIF = _sf._dev + "**/*.gif";
    _sf.allFile_JPEG = _sf._dev + "**/*.jpeg";
    // 发布路径
    _sf.root = './publish';
    _sf.dist = 'publish/static';
    _sf.distjs = _sf.dist + '/tpl/';
    _sf.distmodel = _sf.dist + '/model/';
    return _sf;
})();

// 压缩js文件
gulp.task('alljs', function () {
    gulp.src([_cfg.all_JS, '!run.js']).pipe(uglify()).pipe(rev()).pipe(gulp.dest(_cfg.root)).pipe(rev.manifest("allFile_JS.json")).pipe(gulp.dest('./rev/js'));
});

gulp.task('minrun', function () {
    gulp.src([_cfg.allFile_RUN]).pipe(gulp.dest(_cfg.dist));
});

// 替换路径
gulp.task('revJs', function () {
    gulp.src(['./rev/**/*.json', _cfg._dev + '/index.html']).pipe(revCollector({replaceReved: true})).pipe(gulp.dest(_cfg.root));
});

// 压缩css文件 html 文件
gulp.task('minify_css_html', function () {
    gulp.src([_cfg.allFile_CSS]).pipe(minifyCss()).pipe(gulp.dest(_cfg.dist));
    gulp.src([_cfg.allFile_TPL, _cfg.allFile_HTML, _sfg.allFile_XHTML]).pipe(minifyHtml()).pipe(gulp.dest(_cfg.dist));
});

// 压缩图片
gulp.task('imgs', function () {
    gulp.src([_cfg.allFile_JPG, _cfg.allFile_JPEG, _cfg.allFile_PNG, _cfg.allFile_GIF]).pipe(imagemin({progressive: true})).pipe(gulp.dest(_cfg.root))
            //.pipe(notify({message: 'img task ok'}))
            ;
});

// 清除缓存文件
gulp.task("clean", function () {
    gulp.src(['./publish', './rev']).pipe(clean());
});

var path = {
    src: './devSea/static',
    dist: './devSea/static'
};

gulp.task('less', function () {
    gulp.src(path.src + '/less/**/*.less')
            .pipe(less({
                plugins: [autoprefix, cleancss]
            }))
            .pipe(concat('backend.css'))
            //.pipe(minifyCss())
            //.pipe(rev())
            .pipe(gulp.dest(path.dist + '/css'))
            //.pipe(rev.manifest())
            //.pipe(gulp.dest(path.src + '/rev/css'))
            ;
});

gulp.task('concatJS', function () {
    gulp.src([_cfg._def + 'tpl/ctrls/*.js']).pipe(concat('alls.js')).pipe(gulp.dest(_cfg._def + 'tpl/ctrls'));
});
gulp.task('devJS', function () {
    gulp.src([_cfg.all_JS, '!run.js']).pipe(rev()).pipe(rev.manifest("allFile_JS.json")).pipe(gulp.dest('./rev/js'));
});
gulp.task('devRevJs', function () {
    gulp.src(['./rev/**/*.json', './index.html']).pipe(revCollector({replaceReved: true})).pipe(gulp.dest(_cfg._dev));
});

//正式构建
gulp.task('build', function (done) {
    runSequence(['alljs', 'revJs'], ['minify_css_html'], done);
});

// 多任务执行
//gulp.task('default', ['imgs']);
//gulp.task('default', ['alljs', 'revJs', 'minify_css_html']);
//gulp.task('default', ['build']);
gulp.task('default', ['devJS', 'devRevJs']);