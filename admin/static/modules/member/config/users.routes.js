(function () {
    'use strict';
    angular.module('com.module.users').config(function ($stateProvider) {
        var modelFile = ("www.osanwen.com" === document.domain) ? ('/webpage/static/modules/member/views/') : ('static/modules/member/views/');
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
                    templateUrl: modelFile + 'main.html',
                    controller: 'userMainCtrl'
                })
                .state('app.users.list', {
                    url: '/list',
                    templateUrl: modelFile + 'list.html',
                    controller: 'userListCtrl'
                })
                .state('app.users.alist', {
                    url: '/alist',
                    templateUrl: modelFile + 'alist.html',
                    controller: 'useraListCtrl'
                })
                .state('app.users.add', {
                    url: '/add',
                    templateUrl: modelFile + 'form.html',
                    controller: "userAddCtrl"
                })
                .state('app.users.edit', {
                    url: '/edit/:id',
                    templateUrl: modelFile + 'form.html',
                    controllerAs: 'ctrl',
                    controller: 'userEditCtrl'
                });
    });

})();
