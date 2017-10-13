var AppModeule = angular.module('anApp');

AppModeule
        .factory('cookie', [function () {
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
            }])
        // httpInterceptor
        .factory('httpInterceptor', ['$q', '$injector', function ($q, $injector) {
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
        ])
        // 封装所有请求
        .factory('Servic', ['$http', function ($http) {
                var _acts = '', servic = {};
                servic.http = function (opt, callbacks) {
                    callbacks = callbacks || function () { };
                    var promise = $http(opt).then(function (resp) {
                        callbacks(resp, resp.data);
                    }, function (resp) {
                        console.log(resp);
                    });
                };
                servic.post = function (http, callbacks) {
                    callbacks = callbacks || function () { };
                    var _url = _acts + http.url;
                    var https = {method: 'post', url: _url, data: http.data};
                    this.http(https, callbacks);
                };
                servic.get = function (http, callbacks) {
                    callbacks = callbacks || function () { };
                    var _url = _acts + http.url;
                    var https = {method: 'get', url: _url, data: http.data};
                    this.http(https, callbacks);
                };
                return servic;
            }]);
