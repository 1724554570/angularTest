// 封装所有请求
angular.module('anApp').factory('Servic', ['$http', function ($http) {
        var _acts = '/tkfull/index.php/';
        var servic = {};
        servic.servers = function (http, callbacks) {
            callbacks = callbacks || function () {};
            var _url = _acts + http.url;console.log(http);
            var https = {method: 'post', url: _url, data: http.data};
            var promise = $http(https).then(function (resp) {
                callbacks(resp, resp.data);
            }, function (resp) {
                console.log(resp);
            });
        };
        return servic;
    }]);
// 工具类
angular.module('anApp').factory('Tools', ['cookie', function (cookie) {
        return {
            /**
             * 回到顶部
             * @returns {undefined}
             */
            goTop: function () {
                $('body,html').scrollTop(0);
            },
            /**
             * 百度编辑器配置
             * @returns {interfaceServiceL#18.interfaceServiceAnonym$2.ueditor.interfaceServiceAnonym$3}
             */
            ueditor: function () {
                return {toolbar: [
                        'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
                        'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
                        '| justifyleft justifycenter justifyright justifyjustify |',
                        'link unlink | emotion image video  | map',
                        '| horizontal print preview fullscreen', 'drafts', 'formula'
                    ],
                    initialFrameWidth: '100%', initialFrameHeight: 400,
                    //focus时自动清空初始化时的内容
                    autoClearinitialContent: true,
                    //关闭字数统计
                    wordCount: false,
                    //关闭elementPath
                    elementPathEnabled: false, autoFloatEnabled: false
                };
            },
            /**
             * 错误信息提示
             * @param {type} message
             * @param {type} flag
             * @returns {undefined}
             */
            getErrorMsg: function (message, flag) {
                if (typeof message === 'string' || flag) {
                    alert(message);
                    return;
                }
                console.log(message);
            }
        };
    }]);
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
// 服务 用户
angular.module('anApp').factory('userService', ['Servic', function (Servic) {
        var users = {};
        var configs = {
            getLists: "apis/users/lists",
            findById: "apis/users/getArtById",
            getLogin: "apis/login/ajaxlogin",
            setUsers: "apis/login/register",
            getForget: "apis/login/ajaxForget",
            loginout: "apis/login/loginout"
        };
        users.getUsers = function (data, callbacks) {
            Servic.servers({url: configs.getLists, data: data}, callbacks);
        };
        users.getLogin = function (data, callbacks) {
            Servic.servers({url: configs.getLogin, data: data}, callbacks);
        };
        users.getRegister = function (data, callbacks) {
            Servic.servers({url: configs.setUsers, data: data}, callbacks);
        };
        users.getForget = function (data, callbacks) {
            Servic.servers({url: configs.getForget, data: data}, callbacks);
        };
        users.findById = function (data, callbacks) {
            Servic.servers({url: configs.findById, data: data}, callbacks);
        };
        users.loginOut = function (callbacks) {
            Servic.servers({url: configs.loginout, data: {}}, callbacks);
        };
        return users;
    }]);
// 服务 产品
angular.module('anApp').factory('articleService', ['Servic', function (Servic) {
        var product = {};
        var configs = {
            getLists: "apis/product/findlist",
            getById: "apis/product/findbyid",
            savaPro: "apis/product/addarticles",
        };
        product.getProduct = function (data, callbacks) {
            Servic.servers({url: configs.getLists, data: data}, callbacks);
        };
        product.getProductById = function (data, callbacks) {
            Servic.servers({url: configs.getById, data: data}, callbacks);
        };
        product.saveProduct = function (datas, callbacks) {
            var sendUrl = configs.savaPro;
            if (datas._csrf != "") {
                sendUrl = configs.savaPro;
            }
            Servic.servers({url: sendUrl, data: datas}, callbacks);
        };

        return product;
    }]);
// 关于
angular.module('anApp').factory('AboutService', ['Servic', function (Servic) {
        var about = {};
        var configs = {
            getAboutDesc: "apis/about/detail",
        };
        about.getProduct = function (callbacks) {
            Servic.servers({url: configs.getLists, data: {'token': token.token}}, callbacks);
        };
        return about;
    }]);