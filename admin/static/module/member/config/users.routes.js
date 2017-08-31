(function () {
    'use strict';
    angular.module('com.module.users').config(function ($stateProvider) {
        var modelFile = './static/module/member/views/';
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
                .state('app.users', {
                    abstract: true,
                    url: '/users',
                    templateUrl: 'modules/users/views/main.html'
                })
                .state('app.users.list', {
                    url: '',
                    templateUrl: 'modules/users/views/list.html',
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
