//解决IE9 console.log 报错
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();
var _cfgs = (function () {
    var self = this;
    return self;
})();

angular.module('anApp', ['ui.bootstrap', 'jqueryHttp', 'ui.router', 'oc.lazyLoad']);
angular.module('anApp').run(function ($rootScope, $state) { $rootScope.goto = function () { $state.go('app.home'); }; $rootScope.goto(); });

