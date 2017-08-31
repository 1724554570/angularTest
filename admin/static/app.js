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

angular.module('anApp', [
    'ui.bootstrap',
    'jqueryHttp',
    'ui.router',
    'oc.lazyLoad',
    'com.module.users'

]).run(function ($rootScope, $state) {
    $rootScope.menu = '';
    $rootScope.goto = function () {
        $state.go('login');
    };
    //$rootScope.goto();
    console.log(typeof $rootScope.user, typeof $rootScope.token);
    if (!$rootScope.user && !$rootScope.token) {
        $state.go('login');
    } else {
        $state.go('home');
    }
});

