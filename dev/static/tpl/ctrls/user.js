/**
 * 用户操作
 * @type type
 */
angular.module('anApp')
        .controller('loginController', ['$scope', 'AccessToken', function ($scope, AccessToken) {
                $scope.titles = "用户管理";
                $scope.isLogin = AccessToken.loginState();
                // 刷新验证码
                $scope.verify = function () {
                    var verifyimg = $(".verifyimg").attr("src");
                    if (verifyimg.indexOf('?') > 0) {
                        $(".verifyimg").attr("src", verifyimg + '&random=' + Math.random());
                    } else {
                        $(".verifyimg").attr("src", verifyimg.replace(/\?.*$/, '') + '?' + Math.random());
                    }
                };
            }])
        //登录控制器
        .controller('loginIndexController', ['$scope', 'cookie', 'loginService', 'localStorage', 'deviceService', 'userInfoService',
            function ($scope, cookie, loginService, localStorage, deviceService, userInfoService) {
                var urlSet = _cfgs.settings;
                $scope.reg = /^1[0-9]{10}$/;
                $scope.login = {mobile_no: '', password: '', passwordInit: '%&@(!^$)', verify: '', rememberPassword: true, isFirstLogin: false};
                //回到顶部
                $scope.gototop = function () {
                    $('body,html').scrollTop(0);
                };
                $scope.init = function () {
                    $scope.gototop();
                    if (window.localStorage.getItem('rememberPassword') == null || window.localStorage.getItem('rememberPassword') == undefined || window.localStorage.getItem('rememberPassword') === 'true') {
                        $scope.rememberPassword = true;
                    } else {
                        $scope.rememberPassword = window.localStorage.getItem('rememberPassword');
                    }
                    if ($scope.login.rememberPassword) {
                        $scope.isFirstLogin = false;
                        $scope.login.password = window.localStorage.getItem('password');
                        $scope.login.mobile_no = window.localStorage.getItem('mobile_no');
                    } else {
                        $scope.isFirstLogin = true;
                    }
                };
                $scope.init();
                $scope.getLoginError = function (message) {
                    if (typeof message === 'string') {
                        alert(message);
                        return;
                    }
                    for (var i in message) {
                        $scope.login[i + 'error'] = true;
                        alert(message[i][0]);
                    }
                };
                $scope.error = {loginPassMsg: ''};
                $scope.checkLoginPassCaps = function (event) {
                    var loginPassMsg = loginService.checkCapsLock(event);
                    if (loginPassMsg) {
                        $scope.error.loginPassMsg = '大写锁定键被按下，请注意大小写';
                        return;
                    } else {
                        $scope.error.loginPassMsg = '';
                    }
                };
                //清处错误提示
                $scope.clearTip = function (key) {
                    $scope.error[key] = '';
                };
                //登录
                $scope.loginconfirm = function () {
                    var loginPassword = '';
                    loginPassword = $scope.login.password;
                    var data = {mobile_no: $scope.login.mobile_no, password: loginPassword, 'token': token.token, rememberMe: $scope.login.rememberPassword, device: deviceService.device};
                    userInfoService.getLogin(data, function (resp) {
                        if (resp.data.status === 1) {
                            if ($scope.rememberPassword === true || $scope.rememberPassword === 'true') {
                                window.localStorage.setItem('password', loginPassword);
                                window.localStorage.setItem('mobile_no', resp.data.users.username);
                            } else {
                                window.localStorage.removeItem('password');
                            }
                            localStorage.setValue('rememberPassword', $scope.rememberPassword);
                            var cookieUsers = angular.toJson(resp.data.users);
                            cookie.set('isLogined', resp.data.users.username, 7 * 24 * 3600, true);
                            localStorage.setValue('login.users', cookieUsers);
                            window.location.href = urlSet._PROJECT + '/#/app/home';
                        } else {
                            $scope.login.mobile_no = "", $scope.login.password = "";
                            $scope.getLoginError(resp.data.message);
                        }
                    });
                };
                //记住账号
                var username = window.localStorage.getItem('username');
                $scope.login.mobile_no = username ? username : '';
            }])
        //注册控制器
        .controller('registerController', ['$scope', '$state', 'loginService', 'userInfoService',
            function ($scope, $state, loginService, userInfoService) {
                $scope.reg = /^1[0-9]{10}$/;
                var column = {
                    mobile_no: '',
                    password: '',
                    invitation: '',
                    invitationerror: true
                };
                $scope.register = column;
                console.log($scope.register);
                $scope.getVCodeAbleed = true;
                $scope.getError = function (message) {
                    if (typeof message === 'string') {
                        alert(message);
                        return;
                    }
                    for (var i in message) {
                        $scope.register[i + 'error'] = true;
                        alert(message[i][0]);
                    }
                };
                $scope.error = {regPassMsg: ''};
                $scope.checkRegPassCaps = function (event) {
                    var regPassMsg = loginService.checkCapsLock(event);
                    if (regPassMsg) {
                        $scope.error.regPassMsg = '大写锁定键被按下，请注意大小写';
                        return;
                    } else {
                        $scope.error.regPassMsg = '';
                    }
                }
                //清处错误提示
                $scope.clearTip = function (key) {
                    $scope.error[key] = '';
                }
                //提交注册信息
                $scope.confirm = function (data) {
                    if ($scope.register.password == '' || $scope.register.password == undefined) {
                        alert('密码不能为空！');
                        return;
                    }
                    token.token = 'register';
                    var datas = {mobile_no: $scope.register.mobile_no, verifyCode: $scope.register.verifyCode, password: $scope.register.password, token: token.token};
                    userInfoService.getRegister(datas, function (resp) {
                        if (resp.data.status === 1) {
                            window.localStorage.setItem('username', $scope.register.mobile_no);
                            $state.go('login.loginindex');
                        } else {
                            $scope.getError(resp.data.message);
                        }
                    });
                };
            }])
        //忘记密码控制器
        .controller('forgetPasswordController', ['$scope', 'cookie', 'userInfoService',
            function ($scope, cookie, userInfoService) {
                $scope.reg = /^1[0-9]{10}$/;
                $scope.resetPassword = {};
                $scope.resetPassword.mobile_no = '';
                $scope.resetPassword.password = '';
                //确定提交
                $scope.confirm = function () {
                    var data = {mobile_no: $scope.resetPassword.mobile_no, password: $scope.resetPassword.password, token: token.token};
                    userInfoService.getForget(data, function (resp) {
                        if (resp.data.status === 1) {
                            cookie.set('login.mobile_no', $scope.resetPassword.mobile_no, 7 * 24 * 3600, true);
                        } else {
                            $scope.getError(resp.data.message);
                        }
                    });
                };
                $scope.getError = function (message) {
                    console.log(message);
                };
            }])

        .controller('loginoutCtrl', ['$scope', '$state', 'cookie', 'userInfoService', function ($scope, $state, cookie, userInfoService) {
                $scope.loginOut = function () {
                    userInfoService.loginOut(function (resp) {
                        if (resp.data.status === 1) {
                            window.localStorage.setItem('login.users', '');
                            cookie.removeAll();
                            $state.go('app.home');
                        } else {
                            alert(resp.data.message);
                        }
                    });
                };
                $scope.loginOut();
            }])
        ;

angular.module('anApp').factory('loginService', function () {
    var global = {}
    global.isIE = function () {
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    global.checkCapsLock = function (event) {
        if (this.isIE())
            return;
        var e = event || window.event;
        var keyCode = e.keyCode || e.which; // 按键的keyCode
        var isShift = e.shiftKey || (keyCode == 16) || false; // shift键是否按住
        if (((keyCode >= 65 && keyCode <= 90) && !isShift) // Caps Lock 打开，且没有按住shift键
                || ((keyCode >= 97 && keyCode <= 122) && isShift)// Caps Lock 打开，且按住shift键
                ) {
            return true;
        } else {
            return false;
        }
    };
    return global;
});
