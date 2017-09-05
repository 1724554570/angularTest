(function () {
    'use strict';
    angular.module('com.module.users').config(function ($stateProvider) {
        var modelFile = './static/modules/member/views/';
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: modelFile + 'login.html',
                controller: 'LoginCtrl'
            })
            .state('register', {
                url: '/register',
                template: '<register></register>',
                controller: 'RegisterCtrl'
            })
            // .state('app.member', {
            //     url: '/memberList',
            //     views: {
            //         content: {
            //             templateUrl: pathsview + 'member/list.html',
            //             controller: 'memberListCtrl'
            //         }
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //                 return $ocLazyLoad.load([loaderCtrls + 'member.js']);
            //             }]
            //     }
            // })
            .state('app.users', {
                //abstract: true,
                url: '/users',
                templateUrl: modelFile + 'main.html',
                controller: 'userMainCtrl'
            })
            .state('app.users.list', {
                url: '/list',
                templateUrl: modelFile + 'list.html',
                controllerAs: 'ctrl',
                controller: function (users) {
                    console.log('users', users);
                },
                resolve: {
                    users: function (UserService) {
                        console.log('users');
                    }
                }
            })
            .state('app.users.add', {
                url: '/add',
                templateUrl: 'modules/users/views/form.html',
                controllerAs: 'ctrl',
                controller: function ($state) {
                },
                resolve: {
                }
            })
            .state('app.users.edit', {
                url: '/edit/:id',
                templateUrl: 'modules/users/views/form.html',
                controllerAs: 'ctrl',
                controller: function ($state) {
                },
                resolve: {
                }
            })
            .state('app.users.view', {
                url: '/view/:id',
                templateUrl: 'modules/users/views/view.html',
                controllerAs: 'ctrl',
                controller: function () {
                },
                resolve: {
                }
            })
            .state('app.users.delete', {
                url: '/:id/delete',
                template: '',
                controller: function ($stateParams, $state, UserService) {
                }
            })
            .state('app.users.profile', {
                url: '/profile',
                templateUrl: 'modules/users/views/profile.html',
                controllerAs: 'ctrl',
                controller: function ($state, UserService) {
                },
                resolve: {
                }
            });
    });

})();
