var b_source;
var d_source = '.'; // 开发根文件路径
b_source = d_source + '/static';

var builds = 'builds'; // 发布文件
var minFile = 'builds'; // 压缩文件路径（默认开启压缩，关闭请在运行代码块的 压缩文件 注释）
var rev_source = 'revCollector';

var config = {
    //资源文件
    source: {
        //源文件
        src: {
            font: b_source + "/font/*",
            css: [
                b_source + "/ossweb-img/*.css",
                b_source + "/*.css",
                b_source + "/**/*.css",
                b_source + "/**/**/*.css"
            ],
            tools: "./tools/*.js",
            js: [
                //'./*/*.js',
                b_source + "/**.js",
                b_source + "/**/**.js",
                b_source + "/**/**/**.js",
                b_source + "/**/**/**/**.js",
                b_source + "/**/**/**/**/**.js"
            ],
            images: b_source + "/images/**.{png,jpg,gif,ico}",
            jshtml: b_source + "/js/**/**.html",
            html: [
                b_source + "/**.html",
                b_source + "/html/**.html",
                b_source + "/html/**/**.html",
                b_source + "/html/**/**/**.html"
            ],
            mobile: b_source + "/mobile/**.html"
        },
        //MD5版本号文件
        rev: {
            image: "rev/image/**.json",
            font: "rev/font/**.json",
            css: "rev/css/**.json",
            js: "rev/js/**.json"
        },
        //替换版本后的文件
        revCollector: {
            css: [
                rev_source + "/**.css",
                rev_source + "/**/**.css"
            ],
            html: [
                rev_source + "/**.html",
                rev_source + "/html/**.html",
                rev_source + "/html/**/**.html",
                rev_source + "/html/**/**/**.html",
                rev_source + "/html/**/**/**/**.html"
            ],
            mobile: [
                rev_source + "/mobile/**.html",
                rev_source + "/mobile/**/**.html",
                rev_source + "/mobile/**/**.html"
            ]
        }
    },
    //目录
    dir: {
        // MD5版本号文件目录
        rev: {
            image: 'rev/image',
            font: "rev/font",
            css: "rev/css",
            js: "rev/js"
        },
        // 替换版本后的文件目录(开发调试文件)
        revCollector: {
            css: rev_source,
            html: rev_source + '/',
            mobile: rev_source + '/mobile'
        },
        // 正式文件目录(压缩编译文件)
        dist: {
            css: minFile + "/",
            js: minFile + "/",
            images: minFile + "/images",
            html: builds + "",
            mobile: builds + ""
        },
        // 清除 开发调试文件 && 压缩编译文件
        clean: {
            src: '../' + builds,
            revCol: ['./' + rev_source + '/css', './' + rev_source + '/']
        }
    }
};

module.exports = config;
