angular.module('anApp').config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {
        //注册拦截器
        $httpProvider.interceptors.push('httpInterceptor');
        var paths = _cfgs.settings;
        var base_templateUrl = paths.view + "app.xhtml";
        $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: base_templateUrl,
                    controller: 'loginController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'user.js'
                                ]);
                            }]}
                })
                .state("login.loginindex", {
                    url: "/loginindex",
                    templateUrl: paths.view + "user_login.xhtml",
                    controller: 'loginIndexController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'user.js'
                                ]);
                            }]}
                })
                .state("login.register", {
                    url: "/register",
                    templateUrl: paths.view + "user_register.xhtml",
                    controller: 'registerController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'user.js'
                                ]);
                            }]}
                })
                .state("loginout", {
                    url: "/out",
                    controller: 'loginoutCtrl',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'user.js'
                                ]);
                            }]}
                })
                
                
                // 
                .state('app', {
                    url: '/app',
                    templateUrl: base_templateUrl,
                    controller: 'appController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'home.js'
                                ]);
                            }]}
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: paths.view + "app_index.xhtml",
                    controller: 'apphomeController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'home.js'
                                ]);
                            }]}
                })

                .state('info', {
                    url: '/info',
                    templateUrl: base_templateUrl,
                    controller: 'myselfController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'home.js'
                                ]);
                            }]}
                })
                .state('info.user', {
                    url: '/user/:id',
                    templateUrl: paths.view + "user_info.xhtml",
                    controller: 'infoController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'member.js'
                                ]);
                            }]}
                })
                // 
                .state('article', {
                    url: '/article',
                    templateUrl: base_templateUrl,
                    controller: 'artCtrl',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                .state('article.add', {
                    url: '/add',
                    templateUrl: paths.view + "article.xhtml",
                    controller: 'artCtrl_add',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                .state('article.list', {
                    url: '/list',
                    templateUrl: paths.view + "article_list.xhtml",
                    controller: 'artCtrl_list',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                .state('article.detail', {
                    url: '/detail/:id',
                    templateUrl: paths.view + "article_detail.xhtml",
                    controller: 'artCtrl_desc',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                //
                .state('issue', {
                    url: '/qas',
                    //templateUrl: base_templateUrl,
                    controller: 'dynamicController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'dynamic.js'
                                ]);
                            }]}
                })
                .state('issue.home', {
                    url: '/home',
                    //templateUrl: base_templateUrl,
                    controller: 'dynamicController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'dynamic.js'
                                ]);
                            }]}
                })
                // 
                .state('about', {
                    url: '/about',
                    //templateUrl: base_templateUrl,
                    controller: 'aboutController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'about.js'
                                ]);
                            }]}
                })
                .state('about.home', {
                    url: '/home',
                    //templateUrl: base_templateUrl,
                    controller: 'aboutListController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    //paths.ctrl + 'about.js'
                                ]);
                            }]}
                })
                ;

    }]);