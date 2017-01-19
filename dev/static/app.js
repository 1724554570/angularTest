angular.module('anApp')
        .config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {
                //注册拦截器
                $httpProvider.interceptors.push('httpInterceptor');
                var paths = _cfgs.settings;
                var base_templateUrl = paths.view + "app.tpl";
                $stateProvider
                        .state("login", {
                            url: "/login",
                            templateUrl: base_templateUrl,
                            controller: 'loginController',
                            resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                                    }]}
                        })
                        .state("login.loginindex", {
                            url: "/loginindex",
                            views: {
                                content: {
                                    templateUrl: paths.view + "user_login.tpl",
                                    controller: 'loginIndexController'
                                },
                                content2: {
                                    templateUrl: paths.view + "app_tips.tpl"
                                }
                            }
                        })
                        .state("login.register", {
                            url: "/register",
                            views: {
                                content: {
                                    templateUrl: paths.view + "user_register.tpl",
                                    controller: 'registerController'
                                },
                                content2: {
                                    templateUrl: paths.view + "app_tips.tpl"
                                }
                            }
                        })
                        .state("loginout", {
                            url: "/out",
                            controller: 'loginoutCtrl'
                        })
                        // 
                        .state('app', {
                            url: '/app',
                            templateUrl: base_templateUrl,
                            controller: 'appController',
                            resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                                    }]}
                        })
                        .state('app.home', {
                            url: '/home',
                            views: {
                                content: {
                                    templateUrl: paths.view + "app_index.tpl",
                                    controller: 'apphomeController'
                                },
                                content2: {
                                    templateUrl: paths.view + "user_log.tpl",
                                    controller: 'tokenCtrl'
                                }
                            }
                        })

                        .state('info', {
                            url: '/info',
                            templateUrl: base_templateUrl,
                            controller: 'myselfController',
                            resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                                    }]}
                        })
                        .state('info.user', {
                            url: '/user/:id',
                            views: {
                                content: {
                                    templateUrl: paths.view + "user_info.tpl",
                                    controller: 'infoController'
                                },
                                content2: {
                                    templateUrl: paths.view + "user_log.tpl",
                                    controller: 'tokenCtrl'
                                }
                            }
                        })
                        // 
                        .state('article', {
                            url: '/article',
                            templateUrl: base_templateUrl,
                            controller: 'artCtrl',
                            resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                                    }]}
                        })
                        .state('article.add', {
                            url: '/add',
                            views: {
                                content: {
                                    templateUrl: paths.view + "article.tpl",
                                    controller: 'artCtrl_add'
                                },
                                content2: {
                                    templateUrl: paths.view + "user_log.tpl",
                                    controller: 'tokenCtrl'
                                }
                            }
                        })
                        .state('article.list', {
                            url: '/list',
                            views: {
                                content: {
                                    templateUrl: paths.view + "article_list.tpl",
                                    controller: 'artCtrl_list'
                                },
                                content2: {
                                    templateUrl: paths.view + "user_log.tpl",
                                    controller: 'tokenCtrl'
                                }
                            }
                        })
                        .state('article.detail', {
                            url: '/detail/:id',
                            views: {
                                content: {
                                    templateUrl: paths.view + "article_detail.tpl",
                                    controller: 'artCtrl_desc'
                                },
                                content2: {
                                    templateUrl: paths.view + "user_log.tpl",
                                    controller: 'tokenCtrl'
                                }
                            }
                        })
                        //
                        .state('issue', {
                            url: '/qas',
                            templateUrl: base_templateUrl,
                            controller: 'dynamicController',
                            resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                                    }]}
                        })
                        .state('issue.home', {
                            url: '/home',
                            views: {
                                content: {
                                    //templateUrl: base_templateUrl,
                                    controller: 'dynamicController'
                                }, content2: {}
                            }
                        })
                        // 
                        .state('about', {
                            url: '/about',
                            templateUrl: base_templateUrl,
                            controller: 'aboutController',
                            resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                        return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                                    }]}
                        })
                        .state('about.home', {
                            url: '/home',
                            views: {
                                content: {
                                    //templateUrl: base_templateUrl,
                                    controller: 'aboutListController'
                                },
                                contetn2: {}
                            }
                        })
                        ;

            }
        ]);