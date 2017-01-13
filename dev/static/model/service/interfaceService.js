// 服务 用户
angular.module('testApp').factory('userInfoService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
        var actions = '/tkfull/index.php/';
        var users = {};
        var configs = {
            getLists: actions + "apis/users/lists",
            findById: actions + "apis/users/getArtById",
            getLogin: actions + "apis/login/ajaxlogin",
            setUsers: actions + "apis/login/ajaxreg",
            getForget: actions + "apis/login/ajaxForget"
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
        var actions = '/tkfull/index.php/';
        var product = {};
        var configs = {
            getLists: actions + "apis/Product/getProduct",
            getById: actions + "apis/Product/getProductById",
            savaPro: actions + "apis/Product/saveProduct",
        };
        var getServerData = function (http, callbacks) {
            callbacks = callbacks || function () {};
            var promise = $http(http).then(function (resp) {console.log(resp);
                callbacks(resp);
            }, function (resp) {
                console.log(resp);
            });
        };
        product.getProduct = function (data, callbacks) {
            getServerData({method: 'post', url: configs.getLists, data: data}, callbacks);
        };
        product.getProductById = function (data, callbacks) { console.log(data);
            getServerData({method: 'post', url: configs.getById, data: data}, callbacks);
        };
        product.saveProduct = function (datas, callbacks) {
            var sendUrl = configs.savaPro;
            if (datas._csrf != "") {
                sendUrl = configs.savaPro;
            }
            getServerData({method: 'post', url: sendUrl, data: datas}, callbacks);
        };

        return product;
    }]);
// 关于
angular.module('testApp').factory('AboutService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
        var actions = '/tkfull/index.php/';
        var about = {};
        var configs = {
            getAboutDesc: actions + "apis/about/detail",
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