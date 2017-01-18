/**
 * 关于
 * @type type
 */
angular.module('anApp')
        .controller('aboutController', ['$scope', 'AccessToken', '$state', function ($scope, AccessToken, $state) {
                $scope.nav = {all: false, pro: false, qas: false, abo: true};
                $scope.isLogin = AccessToken.loginState();
                $scope.devs = function () {
                    alert('暂未开发');
                    $state.go('app.home');
                };
                //$scope.devs();
            }])
        .controller('aboutDescController', ['$scope', 'localStorage', 'userInfoService', '$state', function ($scope, localStorage, userInfoService, $state) {
                
            }])

        ;