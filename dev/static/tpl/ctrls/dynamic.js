/**
 * 问答
 * @type type
 */
angular.module('anApp')
        .controller('dynamicController', ['$scope', 'localStorage', 'cookie', '$state', function($scope, localStorage, cookie, $state) {
                $scope.nav = {all: false, pro: false, qas: true, abo: false};
                var loginUsers = angular.fromJson(window.localStorage.getItem('login.users'));
                $scope.isLogin = loginUsers || angular.fromJson(cookie.get('login.users.name')) || "";
                $scope.devs = function() {
                    alert('暂未开发');
                    $state.go('app.home');
                };
                $scope.devs();
            }])
        .controller('dynamicListController', ['$scope', 'localStorage', 'userInfoService', '$state', function($scope, localStorage, userInfoService, $state) {

            }])

        ;