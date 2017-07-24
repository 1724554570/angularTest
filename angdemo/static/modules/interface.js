// 检测登录
angular.module('anApp').factory('AccessToken', ['$state', '$window', 'cookie', function ($state, $window, cookie) {
        return {
            /**
             * 登录状态
             * @returns {undefined|String|Array|Number|Object}
             */
            loginState: function () {
                var _msg = "";
                if (cookie.get('isLogined')) {
                    var _url = location.href;
                    var _mac = _url.match('loginindex|register');
                    if (_mac) {
                        $window.history.back();
                        return;
                    }
                    token.info = true;
                    _msg = angular.fromJson(window.localStorage.getItem('login.users')) || angular.fromJson(cookie.get('login.users.name'));
                }
                return _msg;
            }
        };
    }]);