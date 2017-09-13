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
        var pathsview = ("www.osanwen.com" === document.domain) ? ('/webpage/static/views/') : ('static/views/');
        return {
            templateUrl: pathsview + 'admin-header.html',
            transclude: true,
            scope: {
                title: '@',
                subTitle: '@'
            },
            restrict: 'A'
        };
    });

})();
