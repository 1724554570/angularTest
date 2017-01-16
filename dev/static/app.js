angular.module('testApp').config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {
        //注册拦截器
        $httpProvider.interceptors.push('httpInterceptor');
        var paths = _getPaths();
        console.log(paths);
        var base_templateUrl = paths.view + "app.tpl";
        $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: base_templateUrl,
                    controller: 'loginController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'user.js'
                                ]);
                            }]}
                })
                .state("login.loginindex", {
                    url: "/loginindex",
                    templateUrl: paths.view + "user_login.tpl",
                    controller: 'loginIndexController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'user.js'
                                ]);
                            }]}
                })
                .state("login.register", {
                    url: "/register",
                    templateUrl: paths.view + "user_register.tpl",
                    controller: 'registerController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'user.js'
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
                                    paths.ctrl + 'home.js'
                                ]);
                            }]}
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: paths.view + "app_index.tpl",
                    controller: 'apphomeController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'home.js'
                                ]);
                            }]}
                })

                .state('info', {
                    url: '/info',
                    templateUrl: base_templateUrl,
                    controller: 'myselfController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'home.js'
                                ]);
                            }]}
                })
                .state('info.user', {
                    url: '/user/:id',
                    templateUrl: paths.view + "user_info.tpl",
                    controller: 'infoController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'member.js'
                                ]);
                            }]}
                })
                // 
                .state('pro', {
                    url: '/pro',
                    templateUrl: base_templateUrl,
                    controller: 'proController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                .state('pro.list', {
                    url: '/list',
                    templateUrl: paths.view + "article_list.tpl",
                    controller: 'proListController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                .state('pro.article', {
                    url: '/article',
                    templateUrl: paths.view + "article.tpl",
                    controller: 'proArticleController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                .state('pro.artdetail', {
                    url: '/detail/:id',
                    templateUrl: paths.view + "article_detail.tpl",
                    controller: 'proArtDescController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'article.js'
                                ]);
                            }]}
                })
                //
                .state('qas', {
                    url: '/qas',
                    //templateUrl: base_templateUrl,
                    controller: 'dynamicController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'dynamic.js'
                                ]);
                            }]}
                })
                .state('qas.home', {
                    url: '/home',
                    //templateUrl: base_templateUrl,
                    controller: 'dynamicController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'dynamic.js'
                                ]);
                            }]}
                })
                // 
                .state('abo', {
                    url: '/abo',
                    //templateUrl: base_templateUrl,
                    controller: 'aboutController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'about.js'
                                ]);
                            }]}
                })
                .state('abo.home', {
                    url: '/home',
                    //templateUrl: base_templateUrl,
                    controller: 'aboutListController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    paths.ctrl + 'about.js'
                                ]);
                            }]}
                })
                ;

    }]);