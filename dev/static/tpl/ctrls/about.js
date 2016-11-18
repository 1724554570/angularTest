/**
 * 关于
 * @type type
 */
angular.module('testApp')
        .controller('aboutController', ['$scope', 'localStorage', 'userInfoService', 'cookie', '$state', function ($scope, localStorage, userInfoService, cookie, $state) {
                $scope.nav = {all: false, pro: false, qas: false, abo: true};
                var loginUsers = angular.fromJson(window.localStorage.getItem('login.users'));
                $scope.isLogin = loginUsers || angular.fromJson(cookie.get('login.users.name')) || "";
                $scope.devs = function () {
                    alert('暂未开发');
                    $state.go('app.home');
                };
                //$scope.devs();
            }])
        .controller('aboutDescController', ['$scope', 'localStorage', 'userInfoService', '$state', function ($scope, localStorage, userInfoService, $state) {
                
            }])

        ;