var MODULE_app = angular.module('anApp');
MODULE_app
        
        .controller('appController', ['$scope',
            function ($scope) {
                // $scope.isLogin = AccessToken.loginState();
            }])
        .controller('apphomeController', ['$scope',
            function ($scope) {
                $scope.text = "首页欢迎你！！";
            }])
        ;
