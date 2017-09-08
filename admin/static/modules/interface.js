// 检测登录
angular.module('anApp').factory('AccessToken', ['$http', '$state', '$window', 'cookie', function ($http, $state, $window, cookie) {
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
        },
        loginState_cow: function () {
            return true;
//            return $http({ method: 'post', url: '', data: {} }).then(function (resp) {
//                console.log(1);
//                return true; 
//            }, function (resp) {
//                return false; 
//                console.log(2);
//            });
        }

    };
}]);