(function () {
    'use strict';
    var baseUrl = 'http://47.94.15.71/gcow';
    angular.module('com.module.merchant')
    
        .controller('merchantMainCtrl', [
            '$rootScope', '$scope', '$state',
            function ($rootScope, $scope, $state) {
                $rootScope.navs = 'settings';
            }])

        .controller('merchantListCtrl', [
            '$rootScope', '$scope', '$state',
            function ($rootScope, $scope, $state) {
                $rootScope.menu = 'memberList';
            }])

        .controller('merchantAddCtrl', [
            '$rootScope', '$scope',
            function ($rootScope, $scope) {
                $rootScope.menu = 'memberAdd';
                $scope.userinfo = { usernick: '', password: '' };
                // $scope.submit = function () {

                // };
            }])

        .controller('merchantEditCtrl', [
            '$rootScope', '$scope', '$state', '$stateParams', 'UserService',
            function ($rootScope, $scope, $state, $stateParams, UserService) {
                $scope.userinfo = {};
                //$scope.userinfo = UserService.findById($stateParams.id);

            }])
})();