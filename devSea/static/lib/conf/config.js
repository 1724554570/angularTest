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
var ext = (function () {
    //数组去空
    function skipEmptyElementForArray(arr) {
        var a = [], str = '';
        $.each(arr, function (i, v) {
            var data = $.trim(v);
            if ('' !== data) {
                a.push(data);
                str += '/' + data;
            }
        });
        return {a: a, str: str};
    }

    //适配url路径
    function getPaths() {
        var jxUrl = window.location.pathname;
        var _url = skipEmptyElementForArray(jxUrl.split("/"));
        var cfg;
        if (_url.str && _url.str != '/') {
            cfg = {
                action: '/tkfull/index.php/',
                ctrl: _url.str + '/static/lib/',
                view: _url.str + '/static/view/'
            };
        }
        var data = {action: cfg.action, ctrl: cfg.ctrl, view: cfg.view};
        data.domain = _url.str;
        data.extend = "";
        var uLen = _url.a;
        if (uLen.length >= 2) {
            var pUrl = data.domain;
            data.action = '/' + uLen[0] + cfg.action;
            data.ctrl = pUrl + cfg.ctrl;
            data.view = pUrl + cfg.view;
        }
        return data;
    }

    return {
        getPath: getPaths
    };
})();
var base = ext.getPath();
var baseSource = base.domain;
var baseModel = baseSource + '/static/';
var baseLib = base.ctrl;
var baseView = base.view;


var marketingId = '10000';
var cacheComId = '0';
var comId = -1;
var _Ver = "0.0.1";
var jquerypath = baseModel + '/lib/jquery/jquery.min';
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") {
    //jquerypath = 'lib/jquery/jquery-1.12.4.min';
} else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
    //jquerypath = 'lib/jquery/jquery-1.12.4.min';
} else if (navigator.appName == "Microsoft Internet Explorer") {
    //jquerypath = 'lib/jquery/jquery-1.12.4.min';
}
seajs.config({
    base: baseLib,
    alias: {
        'jquery': jquerypath,
        'layer': baseLib + 'layer/layer',
        'template': baseLib + 'template-debug',
        'request': baseLib + 'comm/request',
        'common': baseLib + 'comm/common',
        'valid': baseLib + 'comm/valid',
        'utils': baseLib + 'comm/utils',
        'interface': baseLib + 'conf/interface',
        'validTip': baseLib + 'conf/validTip',
        'lazyload': baseLib + 'weight/jquery.lazyload.min',
        'iealert': baseLib + 'weight/iealert'
    },
    preload: baseModel + 'lib/jquery/jquery.min',
    map: [
        [".js", ".js?_v=" + _Ver]
    ]
});