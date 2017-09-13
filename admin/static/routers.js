angular.module('anApp').config(['$stateProvider', '$httpProvider',
    function ($stateProvider, $httpProvider) {
        //注册拦截器
        $httpProvider.interceptors.push('httpInterceptor');
        var pathsview = ("www.osanwen.com" === document.domain) ? ('/webpage/static/views/') : ('static/views/');
        $stateProvider
                .state('app', {
                    url: '/app',
                    templateUrl: pathsview + 'base.html',
                    controller: 'appController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['theme/adminLTE2/js/app.js']);
                            }]
                    }
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: pathsview + 'home.html',
                    controller: 'apphomeController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                //return $ocLazyLoad.load(['theme/adminLTE2/js/app.js']);
                            }]
                    }
                })

                ;
    }]);