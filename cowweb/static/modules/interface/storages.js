/**
 * 本地存储数据
 */
angular.module('anApp').provider('lStore', function () {
    this.$get = function () {
        var result = {};
        result.setValue = function (key, value) {
            //存储，IE6~7 cookie 其他浏览器HTML5本地存储
            if (window.localStorage) {
                localStorage.setItem(key, value);
            } else {
                Cookie.write(key, value);
            }
        };
        result.getValue = function (key) {
            return window.localStorage ? localStorage.getItem(key) : Cookie.read(key);
        };
        result.removeValue = function (key) {
            return window.localStorage ? localStorage.removeItem(key) : Cookie.removeItem(key);
        };
        result.removeAll = function () {
            return window.localStorage ? localStorage.clear() : '';
        };
        return result;
    };
});

/**
 * 格式化文章
 */
angular.module('anApp').directive('stringHtml', function () {
    return function (scope, el, attr) {
        if (attr.stringHtml) {
            scope.$watch(attr.stringHtml, function (html) {
                el.html(html || '');//更新html内容
            });
        }
    };
});

/**
 * 格式化时间格式
 */
angular.module('anApp').filter('FormatStrDate', function () {
    var _self = function () {
        this.tosubstr = function (v) {
            return (v).substr(0, 10);
        };

        this.isNums10 = function (m) {
            return m < 10 ? '0' + m : m;
        };

        this.numToString = function (t) {
            var _this = this;
            var rtime = parseInt(t) * 1000;
            var time = new Date(rtime);
            var Y = time.getFullYear(), M = time.getMonth() + 1, D = time.getDate() + 1;
            var h = time.getHours() + 1, mm = time.getMinutes() + 1, s = time.getSeconds() + 1;
            var times = '' + _this.isNums10(h) + ':' + _this.isNums10(mm) + ':' + _this.isNums10(s);
            return Y + '-' + _this.isNums10(M) + '-' + _this.isNums10(D);
        };
    };
    return function (input) {
        var res, tostrins = new _self();
        if (input) {
            if (input.match('-')) {
                res = tostrins.tosubstr(input);
            } else {
                res = tostrins.numToString(input);
            }
        }
        return res;
    };
});