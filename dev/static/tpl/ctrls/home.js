/**
 * 首页
 * @type type
 */
angular.module('testApp')
        .controller('appController', ['$scope', 'localStorage', 'userInfoService', 'cookie', '$state',
            function ($scope, localStorage, userInfoService, cookie, $state) {
                $scope.nav = {all: true, pro: false, qas: false, abo: false};
                $scope.info1 = "用户";
                if (cookie.get('isLogined')) {
                    var loginUsers = angular.fromJson(window.localStorage.getItem('login.users'));
                    $scope.isLogin = loginUsers || angular.fromJson(cookie.get('login.users.name')) || "";
                } else {

                }
            }])
        .controller('apphomeController', ['$scope', 'localStorage', 'userInfoService', '$state', 'vaulesFactory',
            function ($scope, localStorage, userInfoService, $state, vaulesFactory) {

                $scope.showSimple = function (product) {
                    //vaulesFactory.setter(product);
                    //alert("正在开发中");
                    //$state.go('info.id');
                };

                $scope.times = function (times) {
                    var rtime = parseInt(times) * 1000;
                    return new Date(rtime).toLocaleString().substr(0, 10);
                };

                userInfoService.getUsers(function (data) {
                    $scope.usersinfo = data;
                });
            }])

        ;
        