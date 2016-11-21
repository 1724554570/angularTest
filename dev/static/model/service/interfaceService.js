// 服务 用户
angular.module('testApp').factory('userInfoService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
        var actionUrl = base.action;
        var users = {};
        var configs = {
            getLists: actionUrl + "apis/users/lists",
            getLogin: actionUrl + "apis/login/ajaxlogin",
            findById: actionUrl + "apis/users/getArtById",
            setUsers: actionUrl + "apis/login/ajaxreg",
            getForget: actionUrl + "apis/login/ajaxForget",
        };
        var getServerData = function (http, callbacks) {
            callbacks = callbacks || function () {};
            var promise = $http(http).then(function (resp) {
                callbacks(resp);
            }, function (resp) {
                console.log(resp);
            });
        };
        users.getUsers = function (data, callbacks) {
            getServerData({method: 'post', url: configs.getLists, data: data}, callbacks);
        };
        users.getLogin = function (data, callbacks) {
            getServerData({method: 'post', url: configs.getLogin, data: data}, callbacks);
        };
        users.getRegister = function (data, callbacks) {
            getServerData({method: 'post', url: configs.setUsers, data: data}, callbacks);
        };
        users.getForget = function (data, callbacks) {
            getServerData({method: 'post', url: configs.getForget, data: data}, callbacks);
        };
        users.findById = function (data, callbacks) {
            getServerData({method: 'post', url: configs.findById, data: data}, callbacks);
        };
        return users;
    }]);
// 服务 产品
angular.module('testApp').factory('productService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
        var actionUrl = base.action;
        var product = {};
        var configs = {
            getLists: actionUrl + "apis/Product/getProduct",
            getById: actionUrl + "apis/Product/getProductById",
            savaPro: actionUrl + "apis/Product/saveProduct",
        };
        var getServerData = function (http, callbacks) {
            callbacks = callbacks || function () {};
            var promise = $http(http).then(function (resp) {
                callbacks(resp);
            }, function (resp) {
                console.log(resp);
            });
        };
        product.getProduct = function (callbacks) {
            var promise = $http({method: 'post', url: configs.getLists, data: {'token': token.token}}).then(function (resp) {
                var userinfo = resp.data.pro;
                callbacks(userinfo);
            }, function (resp) {
                console.log(resp);
            });
            //$http.post(configs.getLists, {'token': token.token}).success(Scallbacks).error(Ecallbacks);
        };
        product.getProductById = function (data, callbacks) {
            var promise = $http({method: 'post', url: configs.getById, data: data}).then(function (resp) {
                var userinfo = resp.data.pro;
                callbacks(userinfo);
            }, function (resp) {
                console.log(resp);
            });
        };
        product.saveProduct = function (datas, callbacks) {
            var sendUrl = configs.savaPro;
            if (datas._csrf != "") {
                sendUrl = configs.savaPro;
            }
            var promise = $http({method: 'post', url: sendUrl, data: datas}).then(function (resp) {
                var userinfo = resp.data;
                callbacks(userinfo);
            }, function (resp) {
                console.log(resp);
            });
        };

        return product;
    }]);
// 关于
angular.module('testApp').factory('AboutService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
        var about = {};
        var configs = {
            getAboutDesc: actionUrl + "apis/about/detail",
        };
        about.getProduct = function (callbacks) {
            var promise = $http({method: 'post', url: configs.getLists, data: {'token': token.token}}).then(function (resp) {
                callbacks(resp);
            }, function (resp) {
                console.log(resp);
            });
        };

        return about;
    }]);