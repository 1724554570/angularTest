var MODULE_app = angular.module('anApp');
MODULE_app.controller('tokenCtrl', ['$scope', 'AccessToken', function ($scope, AccessToken) {
        $scope.isLogin = AccessToken.loginState();
    }]);

/**
 * 关于
 * @type type
 */
angular.module('anApp')
        .controller('aboutController', ['$scope', 'AccessToken', '$state', function ($scope, AccessToken, $state) {
                $scope.nav = {all: false, pro: false, qas: false, abo: true};
                $scope.isLogin = AccessToken.loginState();
                $scope.devs = function () {
                    alert('暂未开发');
                    $state.go('app.home');
                };
                //$scope.devs();
            }])
        .controller('aboutDescController', ['$scope', 'localStorage', 'userInfoService', '$state', function ($scope, localStorage, userInfoService, $state) {

            }])

        ;
/**
 * 文章
 * @type type
 */
angular.module('anApp')
        .controller('artCtrl', ['$scope', 'AccessToken', function ($scope, AccessToken) {
                $scope.nav = {all: false, pro: true, qas: false, abo: false};
                $scope.info1 = "项目";
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('artCtrl_list', ['$scope', 'articleService', 'localStorage', function ($scope, articleService, localStorage) {

                localStorage.setValue('_csrf', "");

                $scope.artLists = function () {
                    articleService.getProduct({}, function (resp) {
                        $scope.product = resp.data.pro;
                    });
                };

                $scope.artLists();

            }])
        .controller('artCtrl_desc', ['$scope', '$state', 'articleService', '$stateParams', function ($scope, $state, articleService, $stateParams) {
                $scope.times = function (times) {
                    var rtime = parseInt(times) * 1000;
                    return new Date(rtime).toLocaleString().substr(0, 10);
                };
                $scope.product = {};
                $scope.getProductInfo = function () {
                    var productId = $stateParams.id;
                    if (!productId) {
                        $state.go('pro.list');
                    }
                    var data = {pro_id: productId};
                    articleService.getProductById(data, function (resp) {
                        $scope.product = resp.data.article;
                        $scope.product._csrf = resp.data.article.id;
                    });
                };
                $scope.getProductInfo();
            }])
        .controller('artCtrl_add', ['$scope', '$state', 'Tools', 'articleService', function ($scope, $state, Tools, articleService) {
                if (!$scope.isLogin) {
                    $state.go('pro.list');
                }
                $scope._simpleConfig = Tools.ueditor();
                //$scope.content2 = "";

                $scope.product = {};
                $scope.product.users = $scope.isLogin.uid;
                $scope.product.productname = "";
                $scope.product.productdesc = "";
                $scope.product.propower = "";
                $scope.product._csrf = "";

                $scope.submitFun = function () {
                    if ($scope.product.propower == "" || $scope.product.productname == "" || $scope.product.productdesc == "") {
                        alert('参数不足');
                        return;
                    }
                    var datas = {
                        id: $scope.product._csrf,
                        users: $scope.isLogin.uid,
                        productname: $scope.product.productname,
                        productdesc: $scope.product.productdesc,
                        propower: $scope.product.propower,
                        token: "saveArticle"
                    };
                    articleService.saveProduct(datas, function (resp) {
                        if (resp.data.pro) {
                            $state.go('pro.list');
                        }
                    });
                };

            }])
        .controller('proArticleEidtController', ['$scope', '$state', 'Tools', 'articleService', 'vaulesFactory', 'localStorage', function ($scope, $state, Tools, articleService, vaulesFactory, localStorage) {
                var column = {productname: '', productdesc: '', propower: '', _csrf: ''};
                $scope.product = column;

                $scope._simpleConfig = Tools.ueditor();
                $scope.content2 = "";

                $scope.getProductInfo = function () {
                    var infos = vaulesFactory.getter(), productId = "";
                    if (infos) {
                        productId = infos.id;
                        localStorage.setValue('_csrf', infos.id);
                    }
                    if (localStorage.getValue('_csrf')) {
                        productId = localStorage.getValue('_csrf');
                    }
                    var data = {pro_id: productId};
                    articleService.getProductById(data, function (resp) {
                        $scope.product = resp.data.article;
                        $scope.product._csrf = resp.data.article.id;
                    });
                };

                $scope.getProductInfo();

                $scope.submitFun = function () {
                    if ($scope.product.propower == "" || $scope.product.productname == "" || $scope.product.productdesc == "") {
                        alert('参数不足');
                        return;
                    }
                    var datas = {
                        id: $scope.product._csrf,
                        productname: $scope.product.productname,
                        productdesc: $scope.product.productdesc,
                        propower: $scope.product.propower,
                        token: token.token
                    };
                    articleService.saveProduct(datas, function (callbacks) {
                        if (callbacks.pro) {
                            $state.go('pro.list');
                        } else if (callbacks.status === 0 && !callbacks.pro) {
                            $state.go('pro.list');
                        }
                    });
                };


            }])

        ;
/**
 * 问答
 * @type type
 */
angular.module('anApp')
        .controller('dynamicController', ['$scope', 'localStorage', 'cookie', '$state', function ($scope, localStorage, cookie, $state) {
                $scope.nav = {all: false, pro: false, qas: true, abo: false};
                var loginUsers = angular.fromJson(window.localStorage.getItem('login.users'));
                $scope.isLogin = loginUsers || angular.fromJson(cookie.get('login.users.name')) || "";
                $scope.devs = function () {
                    alert('暂未开发');
                    $state.go('app.home');
                };
                $scope.devs();
            }])
        .controller('dynamicListController', ['$scope', 'localStorage', 'userInfoService', '$state', function ($scope, localStorage, userInfoService, $state) {

            }])

        ;
/**
 * 首页
 * @type type
 */
angular.module('anApp')
        .controller('appController', ['$scope', 'AccessToken', function ($scope, AccessToken) {
                $scope.nav = {all: true, pro: false, qas: false, abo: false};
                $scope.info1 = "用户";
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('apphomeController', ['$scope', 'userInfoService',
            function ($scope, userInfoService) {

                $scope.lists = function () {
                    userInfoService.getUsers({}, function (resp) {
                        $scope.usersinfo = resp.data.users;
                    });
                };

                $scope.lists();
            }])

        ;

/**
 * 用户信息中心
 * @type type
 */
angular.module('anApp')
        .controller('myselfController', ['$scope', 'AccessToken', function ($scope, AccessToken) {
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('infoController', ['$scope', 'localStorage', 'userInfoService', '$stateParams', function ($scope, localStorage, userInfoService, $stateParams) {
                localStorage.setValue('_csrf', "");

                $scope.getInfoById = function () {
                    var data = {id: $stateParams.id};
                    userInfoService.findById(data, function (resp, res) {
                        $scope.user = res.users;
                        $scope.article = res.article.lists;
                    });
                };
                $scope.getInfoById();

            }])

        ;
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
                        //alert(resp.data.message);
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
                            window.location.href = urlSet._PROJECT + '#/app/home';
                        } else {
                            //$scope.login.mobile_no = "", $scope.login.password = "";
                            //$scope.getLoginError(resp.data.message);
                        }
                    });
                };
                //记住账号
                var username = window.localStorage.getItem('username');
                $scope.login.mobile_no = username ? username : '';
            }])
        //注册控制器
        .controller('registerController', ['$scope', '$state', 'deviceService', 'loginService', 'userInfoService', function ($scope, $state, deviceService, loginService, userInfoService) {
                $scope.reg = /^1[0-9]{10}$/;
                $scope.login = {
                    mobile_no: '',
                    password: '',
                    invitation: '',
                    invitationerror: true
                };
                $scope.getVCodeAbleed = true;
                $scope.getError = function (message) {
                    if (typeof message === 'string') {
                        alert(message);
                        return;
                    }
                    for (var i in message) {
                        $scope.login[i + 'error'] = true;
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
                };
                //提交注册信息
                $scope.confirm = function (data) {
                    if ($scope.login.password == '' || $scope.login.password == undefined) {
                        alert('密码不能为空！');
                        return;
                    }
                    token.token = 'register';
                    var datas = {mobile_no: $scope.login.mobile_no, verifyCode: $scope.login.verifyCode, password: $scope.login.password, token: token.token, device: deviceService.device};
                    userInfoService.getRegister(datas, function (resp) {
                        if (resp.data.status === 1) {
                            window.localStorage.setItem('username', $scope.login.mobile_no);
                            $state.go('login.loginindex');
                        } else {
                            $scope.getError(resp.data.message);
                        }
                    });
                };
            }])
        //忘记密码控制器
        .controller('forgetPasswordController', ['$scope', 'cookie', 'userInfoService', function ($scope, cookie, userInfoService) {
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
        //退出登录
        .controller('loginoutCtrl', ['$scope', '$state', 'cookie', 'userInfoService', function ($scope, $state, cookie, userInfoService) {
                $scope.loginOut = function () {
                    userInfoService.loginOut(function (resp) {
                        if (resp.data.status === 1) {
                            window.localStorage.setItem('login.users', '');
                            cookie.removeId('isLogined');
                            //cookie.removeAll();
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
