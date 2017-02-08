//解决IE9 console.log 报错
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();
var _cfgs = (function () {
    var self = this;
    var searchParms = "devSea|dev|publish";
    var _url = location.href;
    var _search = _url.match(searchParms);
    var _PROJECT = "/", _ACT = "../";
    if (_search) {
        _PROJECT = "/" + _search[0] + "/";
        _ACT = "";
    }
    var setting = {};
    setting.action = _ACT + "tkfull/index.php/";
    setting.ctrl = _PROJECT + "static/tpl/ctrls/";
    setting.view = _PROJECT + "static/tpl/view/";
    setting.domain = "/";
    setting.extend = "";
    setting._PROJECT = _PROJECT;
    self.settings = setting;
    return self;
})();

var token = {token: 'login', info: ''};
angular.module('anApp', ['ui.bootstrap', 'jqueryHttp', 'ui.router', 'oc.lazyLoad', "ng.ueditor"]);

