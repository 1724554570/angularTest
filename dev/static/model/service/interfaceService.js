angular.module('testApp').factory('Servic', ['$http', function ($http) {
        var ACT = '/tkfull/index.php/';
        var servic = {};
        servic.servers = function (http, callbacks) {
            callbacks = callbacks || function () {};
            var _url = ACT + http.url;
            console.log(http, _url);
            var https = {method: 'post', url: _url, data: http.data};
            var promise = $http(https).then(function (resp) {
                callbacks(resp);
            }, function (resp) {
                console.log(resp);
            });
        };
        return servic;
    }]);

// 服务 用户
angular.module('testApp').factory('userInfoService', ['Servic', function (Servic) {
        var users = {};
        var configs = {
            getLists: "apis/users/lists",
            findById: "apis/users/getArtById",
            getLogin: "apis/login/ajaxlogin",
            setUsers: "apis/login/ajaxreg",
            getForget: "apis/login/ajaxForget"
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
        return users;
    }]);
// 服务 产品
angular.module('testApp').factory('productService', ['Servic', function (Servic) {
        var product = {};
        var configs = {
            getLists: "apis/Product/getProduct",
            getById: "apis/Product/getProductById",
            savaPro: "apis/Product/saveProduct",
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
angular.module('testApp').factory('AboutService', ['Servic', function (Servic) {
        var about = {};
        var configs = {
            getAboutDesc: "apis/about/detail",
        };
        about.getProduct = function (callbacks) {
            Servic.servers({url: configs.getLists, data: {'token': token.token}}, callbacks);
        };
        return about;
    }]);