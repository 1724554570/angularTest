var MODULE_app = angular.module('anApp');
MODULE_app

        .controller('appController', ['$scope',
            function ($scope) {
                var bheight = window.screen.height - 50, bheight = (bheight < 600) ? 600 : bheight;
                $scope.open = false;
                $scope.contentHeight = bheight;
                $scope.user = {nickname: 'Machine', face: 'theme/adminLTE2/img/user2-160x160.jpg'};
                $scope.openEvent = function () {
                    var c = (this.open) ? false : true;
                    $scope.open = c;
                };
                // $scope.isLogin = AccessToken.loginState();
            }])
        .controller('apphomeController', ['$rootScope', '$scope',
            function ($rootScope, $scope) {
                $rootScope.menu = 'home';
                $scope.text = "首页";
            }])
        ;
