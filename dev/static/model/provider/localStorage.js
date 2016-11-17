angular.module('testApp').provider('localStorage', function() {
    this.$get = function() {
        var result = {};
        result.setValue = function(key, value) {
            //存储，IE6~7 cookie 其他浏览器HTML5本地存储
            if (window.localStorage) {
                localStorage.setItem(key, value);
            } else {
                Cookie.write(key, value);
            }
        };
        result.getValue = function(key) {
            return window.localStorage ? localStorage.getItem(key) : Cookie.read(key);
        };
        result.removeValue = function(key) {
            return window.localStorage ? localStorage.removeItem(key) : Cookie.removeItem(key);
        };
        result.removeAll = function() {
            return window.localStorage ? localStorage.clear() : '';
        };
        return result;
    };

});
angular.module('testApp').directive('stringHtml', function() {
    return function(scope, el, attr) {
        if (attr.stringHtml) {
            scope.$watch(attr.stringHtml, function(html) {
                el.html(html || '');//更新html内容
            });
        }
    };
});