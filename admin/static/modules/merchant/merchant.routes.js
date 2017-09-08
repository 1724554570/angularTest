(function () {
    'use strict';
    angular.module('com.module.merchant').config(function ($stateProvider) {
        var modelFile = './static/modules/merchant/views/';
        $stateProvider
            .state('app.merchant', {
                abstract: true,
                url: '/merchant',
                templateUrl: modelFile + 'main.html',
                controller: 'merchantMainCtrl'
            })
            .state('app.merchant.list', {
                url: '/list',
                templateUrl: modelFile + 'list.html',
                controller: 'merchantListCtrl'
            })
            .state('app.merchant.add', {
                url: '/add',
                templateUrl: modelFile + 'form.html',
                controller: "merchantAddCtrl"
            })
            .state('app.merchant.edit', {
                url: '/edit/:id',
                templateUrl: modelFile + 'form.html',
                controller: 'merchantEditCtrl'
            })
            ;
    });

})();
