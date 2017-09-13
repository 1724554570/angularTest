(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name com.module.core.directive:adminHeader
     * @description
     * @param {string} title Title
     * @param {string} subTitle Subtitle
     * # adminHeader
     */
    angular.module('anApp').directive('adminHeader', function () {
        return {
            templateUrl: 'static/views/admin-header.html',
            transclude: true,
            scope: {
                title: '@',
                subTitle: '@'
            },
            restrict: 'A'
        };
    });

})();
