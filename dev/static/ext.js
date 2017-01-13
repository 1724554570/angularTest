//解决IE9 console.log 报错
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();
function _getPaths() {
    var searchParms = "devSea|dev|publish";
    var _url = location.href;
    var _search = _url.match(searchParms);
    var _PROJECT = "/", _ACT = "../";
    if (_search) {
        _PROJECT = "/" + _search[0] + "/";
        _ACT = "";
    }
    var settings = {};
    settings.action = _ACT + "tkfull/index.php/";
    settings.ctrl = _PROJECT + "static/tpl/ctrls/";
    settings.view = _PROJECT + "static/tpl/view/";
    settings.domain = "/";
    settings.extend = "";
    console.log(_search, settings);
    return settings;
}
var token = {token: 'login'};
angular.module('testApp', ['ui.bootstrap', 'jqueryHttp', 'ui.router', 'oc.lazyLoad', "ng.ueditor"]);

