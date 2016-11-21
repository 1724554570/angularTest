//解决IE9 console.log 报错
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
            var data = $.trim(v);//$.trim()函数来自jQuery  
            if ('' !== data) {
                a.push(data);
                str += '/' + data;
            }
        });
        return { a: a, str: str };
    }

    //适配url路径
    function getPaths() {
        var jxUrl = window.location.pathname;
        var _url = skipEmptyElementForArray(jxUrl.split("/"));
        var cfg;
        if (_url.str && _url.str != '/') {
            cfg = {
                action: '/tkfull/index.php/',
                ctrl: _url.str + '/static/tpl/ctrls/',
                view: _url.str + '/static/tpl/view/'
            };

        }
        var data = { action: cfg.action, ctrl: cfg.ctrl, view: cfg.view };
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

    function dfpath() {
        return {
            imgs: "public/images/"
        };
    }

    return {
        getPath: getPaths,
        imgs: dfpath
    };
})();
var base = ext.getPath();
console.log(base);
var token = { token: 'login' };
angular.module('testApp', ['ui.bootstrap', 'jqueryHttp', 'ui.router', 'oc.lazyLoad', "ng.ueditor"]);

