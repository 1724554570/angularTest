/**
 * 首页
 * @type type
 */
angular.module('testApp')
        .controller('appController', ['$scope', 'cookie', '$state',
            function ($scope, cookie, $state) {
                $scope.nav = {all: true, pro: false, qas: false, abo: false};
                $scope.info1 = "用户";
                if (cookie.get('isLogined')) {
                    var loginUsers = angular.fromJson(window.localStorage.getItem('login.users'));
                    $scope.isLogin = loginUsers || angular.fromJson(cookie.get('login.users.name')) || "";
                } else {

                }
            }])
        .controller('apphomeController', ['$scope', 'userInfoService',
            function ($scope, userInfoService) {

                $scope.lists = function () {
                    userInfoService.getUsers({}, function (resp) {
                        $scope.usersinfo = resp.data.users;
                    });
                };

                $scope.lists();
            }])

        ;
        