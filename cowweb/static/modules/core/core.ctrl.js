angular.module('anApp')
    .controller('coreCtrl', [
        '$scope', '$state', '$rootScope',
        function ($scope, $state, $rootScope) {
            $rootScope.styles = 'hold-transition skin-blue sidebar-mini';
        }])
    .controller('homeCtrl', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
            $rootScope.navs = 'settings';
            $rootScope.menu = 'home';
            $scope.text = "首页";
        }])
    ;
