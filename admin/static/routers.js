angular.module('anApp').config(['$stateProvider', '$httpProvider',
    function ($stateProvider, $httpProvider) {
        //注册拦截器
        $httpProvider.interceptors.push('httpInterceptor');

        var userTips = 'user_tips.tpl';
        var lzModules = './static/lzModules.js?v=' + Math.random();
        var pathsview = './static/views/';

        var loaderCtrls = './static/controllers/';

        $stateProvider
                // 
                .state('app', {
                    url: '/app',
                    templateUrl: pathsview + 'index.html',
                    controller: 'appController',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([lzModules]);
                            }]
                    }
                })
                .state('app.home', {
                    url: '/home',
                    views: {
                        content: {
                            templateUrl: pathsview + 'home/index.html',
                            controller: 'apphomeController'
                        }
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['theme/adminLTE2/js/app.js']);
                            }]
                    }
                })
                
//                .state('app.login', {
//                    url: '/login',
//                    views: {
//                        content: {
//                            templateUrl: pathsview + 'home/index.html',
//                            controller: 'apphomeController'
//                        }
//                    }
//                })

                .state('app.member', {
                    url: '/memberList',
                    views: {
                        content: {
                            templateUrl: pathsview + 'member/list.html',
                            controller: 'memberListCtrl'
                        }
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([loaderCtrls + 'member.js']);
                            }]
                    }
                })

                ;
    }]);