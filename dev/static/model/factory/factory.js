//var AppModeule = angular.module('anApp');
angular.module('anApp').factory('cookie', [function () {
        function getAllCookie() {
            return document.cookie.split(';');
        }
        function delCookie(item) {//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
            var name = item.split('=')[0];
            var date = new Date();
            date.setTime(date.getTime() - 10000);
            document.cookie = name + "=a; expires=" + date.toGMTString();
        }
        return {
            get: function (key) {
                var rt = null;
                var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    rt = encodeURIComponent(arr[2]);
                }
                return rt;
            },
            set: function (key, value, second, thisPath) {
                if (!second) {
                    second = 30 * 24 * 3600;
                }
                var exp = new Date();
                exp.setTime(exp.getTime() + second * 1000);
                var path = ';path=/';
                if (typeof thisPath != 'undefined' && thisPath == true) {
                    path = '';
                }
                document.cookie = key + "=" + decodeURIComponent(value) + ";expires=" + exp.toGMTString() + path;
            },
            removeId: function (name) {
                delCookie(name);
            },
            removeAll: function () {
                var cookies = getAllCookie();
                cookies.forEach(delCookie);
            }
        };
    }]);
// httpInterceptor
angular.module('anApp').factory('httpInterceptor', ['$q', '$injector', function ($q, $injector) {
        var httpInterceptor = {
            response: function (response) {
                return response;
            },
            responseError: function (response) {
                var getToken = $injector.get('getToken');
                return $q.reject(response);
            },
            request: function (config) {
                return config;
            },
            requestError: function (config) {
                return $q.reject(config);
            }
        };
        return httpInterceptor;
    }
]);
angular.module('anApp').factory('vaulesFactory', function () {
    var testObject = {};
    testObject = [];

    var _setter = function (data) {
        testObject.push(data);
    };

    var _getter = function () {
        return testObject[0];
    };

    var _clear = function () {
        testObject = [];
    };

    return {
        setter: _setter,
        getter: _getter,
        clear: _clear
    };
});
