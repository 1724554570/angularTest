// 服务 用户
angular.module('testApp').factory('userInfoService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
    var users = {};
    var configs = {
        getuserinfo: actionUrl + "Apis/Users/getUserinfo",
        getLogin: actionUrl + "Apis/Login/ajaxlogin",
        findById: actionUrl + "Apis/Users/getArtById",
        setUsers: actionUrl + "Apis/Login/ajaxreg",
        getForget: actionUrl + "Apis/Login/ajaxForget",
    };
    var getServerData = function(http, callbacks){
        var promise = $http(http).then(function (resp) {
            callbacks(resp);
        }, function (resp) {
            console.log(resp);
        });
    };
    
    users.getUsers = function (callbacks) {
        var promise = $http({ method: 'post', url: configs.getuserinfo, data: { 'token': token.token } }).then(function (resp) {
            var userinfo = resp.data.users;
            callbacks(userinfo);
        }, function (resp) {
            console.log(resp);
        });
    };
    users.getLogin = function (data, callbacks) {
        $http({ method: 'post', url: configs.getLogin, data: data }).then(function (resp) {
            callbacks(resp);
        }, function (resp) {
            console.log(resp);
        });
    };
    users.getRegister = function (data, callbacks) {
        $http({ method: 'post', url: configs.setUsers, data: data }).then(function (resp) {
            callbacks(resp);
        }, function (resp) {
            console.log(resp);
        });
    };
    users.getForget = function (data, callbacks) {
        $http({ method: 'post', url: configs.getForget, data: data }).then(function (resp) {
            callbacks(resp);
        }, function (resp) {
            console.log(resp);
        });
    };
    users.findById = function (data, callbacks) {
        $http({ method: 'post', url: configs.findById, data: data }).then(function (resp) {
            callbacks(resp.data);
        }, function (resp) {
            console.log(resp);
        });
    };
    return users;
}]);
// 服务 产品
angular.module('testApp').factory('productService', ['$http', 'localStorage', '$state', '$rootScope', function ($http, localStorage, $state, $rootScope) {
    var product = {};
    var configs = {
        getuserinfo: actionUrl + "Apis/Product/getProduct",
        getById: actionUrl + "Apis/Product/getProductById",
        savaPro: actionUrl + "Apis/Product/saveProduct",
    };
    var Scallbacks = function () {
    };
    var Ecallbacks = function () {
    };
    product.getProduct = function (callbacks) {
        var promise = $http({ method: 'post', url: configs.getuserinfo, data: { 'token': token.token } }).then(function (resp) {
            var userinfo = resp.data.pro;
            callbacks(userinfo);
        }, function (resp) {
            console.log(resp);
        });
        //$http.post(configs.getuserinfo, {'token': token.token}).success(Scallbacks).error(Ecallbacks);
    };
    product.getProductById = function (data, callbacks) {
        var promise = $http({ method: 'post', url: configs.getById, data: data }).then(function (resp) {
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
        var promise = $http({ method: 'post', url: sendUrl, data: datas }).then(function (resp) {
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
        var promise = $http({ method: 'post', url: configs.getuserinfo, data: { 'token': token.token } }).then(function (resp) {
            callbacks(resp);
        }, function (resp) {
            console.log(resp);
        });
    };

    return about;
}]);