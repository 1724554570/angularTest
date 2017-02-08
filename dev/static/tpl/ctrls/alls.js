var MODULE_app = angular.module('anApp');
MODULE_app
        .controller('tokenCtrl', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('aboutController', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('aboutDescController', ['$scope', 'llStorage', 'userService', '$state',
            function ($scope, llStorage, userService, $state) {

            }])
        .controller('artCtrl', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
                $scope.info1 = "项目";
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('artCtrl_list', ['$scope', 'articleService', 'llStorage',
            function ($scope, articleService, llStorage) {
                llStorage.setValue('_csrf', "");
                $scope.artLists = function () {
                    articleService.getProduct({}, function (resp) {
                        $scope.product = resp.data.article;
                    });
                };
                $scope.artLists();
            }])
        .controller('artCtrl_desc', ['$scope', '$state', 'articleService', '$stateParams',
            function ($scope, $state, articleService, $stateParams) {
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
                    articleService.getProductById(data, function (resp, datas) {
                        $scope.product = resp.data.article;
                        $scope.product._csrf = resp.data.article.id;
                        $scope.reply = datas.replys;
                    });
                };
                $scope.getProductInfo();
            }])
        .controller('artCtrl_add', ['$scope', '$state', 'Tools', 'articleService',
            function ($scope, $state, Tools, articleService) {
                if (!$scope.isLogin) {
                    $state.go('pro.list');
                }
                $scope._simpleConfig = Tools.ueditor();
                //$scope.content2 = "";
                $scope.product = {
                    users: $scope.isLogin.uid,
                    productname: '',
                    productdesc: '',
                    propower: '',
                    _csrf: ''
                };
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
        .controller('artCtrl_edit', ['$scope', '$state', 'Tools', 'articleService', 'vaulesFactory', 'llStorage', '$stateParams',
            function ($scope, $state, Tools, articleService, vaulesFactory, llStorage, $stateParams) {
                var column = {productname: '', productdesc: '', propower: '', _csrf: ''};
                $scope.product = column;
                $scope._simpleConfig = Tools.ueditor();
                $scope.content2 = "";
                $scope.getProductInfo = function () {
                    var infos = vaulesFactory.getter(), productId = "";
                    if (infos) {
                        productId = infos.id;
                        llStorage.setValue('_csrf', infos.id);
                    }
                    if (llStorage.getValue('_csrf')) {
                        productId = llStorage.getValue('_csrf');
                    }
                    console.log($stateParams.id);
                    var data = {pro_id: $stateParams.id};
                    console.log(data);
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
        .controller('dynamicCtrl', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('dynamicCtrl_list', ['$scope', 'llStorage', 'userService', '$state',
            function ($scope, llStorage, userService, $state) {

            }])
        .controller('appController', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
                $scope.info1 = "用户";
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('apphomeController', ['$scope', 'userService',
            function ($scope, userService) {
                $scope.lists = function () {
                    userService.getUsers({}, function (resp, datas) {
                        $scope.usersinfo = datas.users;
                    });
                };
                $scope.lists();
            }])
        .controller('myselfCtrl', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
                $scope.info1 = "项目";
                $scope.isLogin = AccessToken.loginState();
            }])
        .controller('myselfCtrl_info', ['$scope', 'llStorage', 'userService', '$stateParams',
            function ($scope, llStorage, userService, $stateParams) {
                $scope.showEdit = function () {
                    $scope.isSelected = true;
                };
                llStorage.setValue('_csrf', "");
                $scope.getInfoById = function () {
                    var data = {
                        id: $stateParams.id,
                        token: token.info,
                        logs: ''
                    };
                    if ($scope.isLogin.uid == data.id) {
                        $scope.isUser = true;
                    }
                    userService.findById(data, function (resp, res) {
                        $scope.user = res.users;
                        $scope.article = res.article.lists;
                    });
                };
                $scope.getInfoById();
            }])
        .controller('userCtrl', ['$scope', 'AccessToken',
            function ($scope, AccessToken) {
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
        .controller('userCtrl_login', ['$scope', 'cookie', 'llStorage', 'DEVICES', 'userService', 'Tools',
            function ($scope, cookie, llStorage, DEVICES, userService, Tools) {
                var urlSet = _cfgs.settings;
                $scope.reg = /^1[0-9]{10}$/;
                $scope.login = {mobile_no: '', password: '', passwordInit: '%&@(!^$)', verify: '', rememberPassword: false, isFirstLogin: false};
                var username = llStorage.getValue('username');
                $scope.login.mobile_no = username ? username : '';

                $scope.init = function () {
                    Tools.goTop();
                    if (llStorage.getValue('rememberPassword') == null ||
                            llStorage.getValue('rememberPassword') == undefined ||
                            llStorage.getValue('rememberPassword') === 'true') {
                        $scope.rememberPassword = true;
                    } else {
                        $scope.rememberPassword = llStorage.getValue('rememberPassword');
                    }
                    if ($scope.login.rememberPassword) {
                        $scope.isFirstLogin = false;
                        $scope.login.password = llStorage.getValue('password');
                        $scope.login.mobile_no = llStorage.getValue('mobile_no');
                    } else {
                        $scope.isFirstLogin = true;
                    }
                };
                $scope.init();

                $scope.loginconfirm = function () {
                    var loginPassword = $scope.login.password;
                    var data = {
                        mobile_no: $scope.login.mobile_no,
                        password: loginPassword,
                        rememberMe: $scope.login.rememberPassword,
                        device: DEVICES.device,
                        token: token.info,
                        logs: 'login'
                    };
                    userService.getLogin(data, function (resp, datas) {
                        if (resp.data.status === 1) {
                            if ($scope.rememberPassword === true || $scope.rememberPassword === 'true') {
                                llStorage.setValue('password', loginPassword);
                                llStorage.setValue('mobile_no', resp.data.users.username);
                            } else {
                                llStorage.removeValue('password');
                            }
                            llStorage.setValue('rememberPassword', $scope.rememberPassword);
                            var cookieUsers = angular.toJson(resp.data.users);
                            cookie.set('isLogined', resp.data.users.username, 7 * 24 * 3600, true);
                            llStorage.setValue('login.users', cookieUsers);
                            window.location.href = urlSet._PROJECT + '#/app/home';
                        } else {
                            Tools.getErrorMsg(datas.message);
                        }
                    });
                };
            }])
        .controller('userCtrl_register', ['$scope', '$state', 'DEVICES', 'Tools', 'llStorage', 'userService',
            function ($scope, $state, DEVICES, Tools, llStorage, userService) {
                $scope.reg = /^1[0-9]{10}$/;
                $scope.login = {mobile_no: '', password: '', invitation: '', invitationerror: true};
                $scope.getVCodeAbleed = true;
                //提交注册信息
                $scope.confirm = function (data) {
                    if ($scope.login.password == '' || $scope.login.password == undefined) {
                        alert('密码不能为空！');
                        return;
                    }
                    var datas = {
                        mobile_no: $scope.login.mobile_no,
                        verifyCode: $scope.login.verifyCode,
                        password: $scope.login.password,
                        token: token.info,
                        logs: 'register',
                        device: DEVICES.device
                    };
                    userService.getRegister(datas, function (resp, datas) {
                        if (resp.data.status === 1) {
                            llStorage.setValue('username', $scope.login.mobile_no);
                            $state.go('login.loginindex');
                        } else {
                            Tools.getErrorMsg(datas.message);
                        }
                    });
                };
            }])
        .controller('userCtrl_forPwd', ['$scope', 'cookie', 'Tools', 'userService',
            function ($scope, cookie, Tools, userService) {
                $scope.reg = /^1[0-9]{10}$/;
                $scope.resetPassword = {mobile_no: '', password: ''};
                //确定提交
                $scope.confirm = function () {
                    var data = {
                        mobile_no: $scope.resetPassword.mobile_no,
                        password: $scope.resetPassword.password,
                        token: token.info,
                        logs: 'forPwdCtrl'
                    };
                    userService.getForget(data, function (resp, datas) {
                        if (resp.data.status === 1) {
                            cookie.set('login.mobile_no', $scope.resetPassword.mobile_no, 7 * 24 * 3600, true);
                        } else {
                            Tools.getErrorMsg(datas.message);
                        }
                    });
                };
            }])
        .controller('userCtrl_loginOut', ['$scope', '$state', 'cookie', 'llStorage', 'Tools', 'userService',
            function ($scope, $state, cookie, llStorage, Tools, userService) {
                $scope.loginOut = function () {
                    userService.loginOut(function (resp, datas) {
                        if (resp.data.status === 1) {
                            llStorage.setValue('login.users', '');
                            cookie.removeId('isLogined');
                            $state.go('app.home');
                        } else {
                            Tools.getErrorMsg(datas.message);
                        }
                    });
                };
                $scope.loginOut();
            }])
        ;
