angular.module('anApp')
        .config(['$stateProvider', '$httpProvider',
            function ($stateProvider, $httpProvider) {
                //注册拦截器
                $httpProvider.interceptors.push('httpInterceptor');

                var userTips = 'user_tips.tpl';
                var lzModules = '';
                var pathsview = './static/views/'

                $stateProvider
                        // 
                        .state('app', {
                            url: '/app',
                            templateUrl: pathsview + 'index.html',
                            controller: 'appController',
                            resolve: {
                                deps: ['$ocLazyLoad',
                                    function ($ocLazyLoad) {
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
                                },
                                // content2: {
                                //     templateUrl: userTips,
                                //     controller: 'tokenCtrl'
                                // }
                            }
                        })
                        .state('app.login', {
                            url: '/login',
                            views: {
                                content: {
                                    templateUrl: pathsview + 'home/index.html',
                                    controller: 'apphomeController'
                                },
                                // content2: {
                                //     templateUrl: userTips,
                                //     controller: 'tokenCtrl'
                                // }
                            }
                        })

                        ;
            }]);