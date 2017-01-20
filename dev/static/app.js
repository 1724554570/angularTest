angular.module('anApp').config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {
        //注册拦截器
        $httpProvider.interceptors.push('httpInterceptor');
        var paths = _cfgs.settings;
        var base_temp = paths.view + 'app.tpl';
        var userTips = paths.view + 'user_tips.tpl';

        $stateProvider
                .state('user', {
                    url: '/login', templateUrl: base_temp, controller: 'userCtrl',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                            }]}
                })
                .state('user.loginindex', {url: '/login', views: {content: {templateUrl: paths.view + 'user/login.tpl', controller: 'loginCtrl'}, content2: {templateUrl: paths.view + 'app_tips.tpl'}}})
                .state('user.register', {url: '/register', views: {content: {templateUrl: paths.view + 'user/register.tpl', controller: 'registerCtrl'}, content2: {templateUrl: paths.view + 'app_tips.tpl'}}})
                .state('loginout', {url: '/out', controller: 'loginoutCtrl'})
                // 
                .state('app', {
                    url: '/app', templateUrl: base_temp, controller: 'appController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                            }]}
                })
                .state('app.home', {url: '/home', views: {content: {templateUrl: paths.view + 'app/index.tpl', controller: 'apphomeController'}, content2: {templateUrl: userTips, controller: 'tokenCtrl'}}})

                .state('info', {
                    url: '/info', templateUrl: base_temp, controller: 'myselfController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                            }]}
                })
                .state('info.user', {url: '/user/:id', views: {content: {templateUrl: paths.view + 'user/info.tpl', controller: 'infoController'}, content2: {templateUrl: userTips, controller: 'tokenCtrl'}}})
                // 
                .state('article', {
                    url: '/article', templateUrl: base_temp, controller: 'artCtrl',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                            }]}
                })
                .state('article.add', {url: '/add', views: {content: {templateUrl: paths.view + 'article/add.tpl', controller: 'artCtrl_add'}, content2: {templateUrl: userTips, controller: 'tokenCtrl'}}})
                .state('article.list', {url: '/list', views: {content: {templateUrl: paths.view + 'article/list.tpl', controller: 'artCtrl_list'}, content2: {templateUrl: userTips, controller: 'tokenCtrl'}}})
                .state('article.detail', {url: '/detail/:id', views: {content: {templateUrl: paths.view + 'article/detail.tpl', controller: 'artCtrl_desc'}, content2: {templateUrl: userTips, controller: 'tokenCtrl'}}})
                //
                .state('issue', {
                    url: '/qas', templateUrl: base_temp, controller: 'dynamicController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                            }]}
                })
                .state('issue.home', {url: '/home', views: {content: {templateUrl: paths.view + 'issue/list.tpl', controller: 'dynamicController'}, content2: {}}})
                // 
                .state('about', {
                    url: '/about',
                    templateUrl: base_temp,
                    controller: 'aboutController',
                    resolve: {deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([paths.ctrl + 'lzModules.js']);
                            }]}
                })
                .state('about.home', {url: '/home', views: {content: {templateUrl: paths.view + 'about/detail.tpl', controller: 'aboutListController'}, content2: {templateUrl: userTips, controller: 'tokenCtrl'}}})
        
                ;
    }
]);