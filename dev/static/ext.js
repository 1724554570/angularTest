//解决IE9 console.log 报错
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();
function _getPaths() {
    var searchParms = "devSea|dev";
    var _url = location.href;
    var _search = _url.match(searchParms);
    console.log(_search);
    var settings = {
        action: "/tkfull/index.php/",
        ctrl: "/dev/static/tpl/ctrls/",
        domain: "/dev",
        extend: "",
        view: "/dev/static/tpl/view/"
    };
    if (!_search) {
        settings.action = "../tkfull/index.php/";
        settings.ctrl = "static/tpl/ctrls/";
        settings.action = "static/tpl/view/";
        settings.domain = "/";
        settings.extend = "";
    }
    return settings;
}
var token = {token: 'login'};
angular.module('testApp', ['ui.bootstrap', 'jqueryHttp', 'ui.router', 'oc.lazyLoad', "ng.ueditor"]);

