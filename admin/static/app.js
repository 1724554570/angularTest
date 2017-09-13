//解决IE9 console.log 报错
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();

angular.module('anApp', [
    'ui.bootstrap',
    'jqueryHttp',
    'ui.router',
    'oc.lazyLoad',
    'angularFileUpload',
    'gettext',
    'com.module.users'
]).run(function ($rootScope, $state, gettextCatalog) {
    gettextCatalog.setCurrentLanguage('zh_CN');
    $rootScope.menu = '';
    $rootScope.styles = '';
    $rootScope.goto = function () {
        $state.go('login');
    };
    //$rootScope.goto();
    if (!$rootScope.user && !$rootScope.token) {
        $state.go('login');
    } else {
        $state.go('home');
    }
});

