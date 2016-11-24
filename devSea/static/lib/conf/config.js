/**
 * 配置文件
 * @type Window.console|Console|window.console|extconsole.c|configconsole.c
 */
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();
var baseSource = '/devSea/static/',
        baseModel = baseSource,
        baseLib = baseSource + 'lib/',
        baseView = baseSource + 'lib/';
var navList = {};
var _Ver = "0.0.1";
var jquerypath = baseModel + '/lib/jquery/jquery.min';
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") {
} else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
} else if (navigator.appName == "Microsoft Internet Explorer") {
}
seajs.config({
    base: baseLib,
    vars: {
        'article': 'article'
    },
    alias: {
        'jquery': jquerypath,
        'layer': baseLib + 'layer/layer',
        'template': baseLib + 'template-debug',
        'templatenative': baseLib + 'template-native-debug',
        'request': baseLib + 'comm/request',
        'common': baseLib + 'comm/common',
        'valid': baseLib + 'comm/valid',
        'utils': baseLib + 'comm/utils',
        'operation': baseLib + 'comm/operation',
        'interface': baseLib + 'conf/interface',
        'validTip': baseLib + 'conf/validTip',
        'lazyload': baseLib + 'weight/jquery.lazyload.min',
        'iealert': baseLib + 'weight/iealert',
        'seajsText': baseLib + 'sea/seajs-text'
    },
    preload: baseModel + 'lib/jquery/jquery.min',
    map: [
        [".js", ".js?_v=" + _Ver]
    ]
});