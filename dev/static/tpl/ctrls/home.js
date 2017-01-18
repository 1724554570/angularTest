/**
 * 首页
 * @type type
 */
angular.module('anApp')
        .controller('appController', ['$scope', 'AccessToken', function ($scope, AccessToken) {
                $scope.nav = {all: true, pro: false, qas: false, abo: false};
                $scope.info1 = "用户";
                $scope.isLogin = AccessToken.loginState();
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
        