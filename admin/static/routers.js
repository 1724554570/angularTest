angular.module('anApp').config(['$stateProvider', '$httpProvider',
    function ($stateProvider, $httpProvider) {
        //注册拦截器
        $httpProvider.interceptors.push('httpInterceptor');
        var pathsview = './static/views/';

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: pathsview + 'index.html',
                controller: 'appController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['theme/adminLTE2/js/app.js']);
                    }]
                }
            })
            .state('app.home', {
                url: '/home',
                templateUrl: pathsview + 'home/index.html',
                controller: 'apphomeController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        //return $ocLazyLoad.load(['theme/adminLTE2/js/app.js']);
                    }]
                }
            })

            ;
    }]);