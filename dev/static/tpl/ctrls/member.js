/**
 * 用户信息中心
 * @type type
 */
angular.module('anApp')
        .controller('myselfController', ['$scope', function ($scope) {
                $scope.nav = {all: true, pro: false, qas: false, abo: false};
                $scope.info1 = "项目";
            }])
        .controller('infoController', ['$scope', 'localStorage', 'userInfoService', '$state', '$stateParams',
            function ($scope, localStorage, userInfoService, $state, $stateParams) {
                localStorage.setValue('_csrf', "");

                $scope.showSimple = function (product) {
                    $state.go('pro.artdetail', {id: product.id});
                };

                $scope.getInfoById = function () {
                    var data = {id: $stateParams.id};
                    userInfoService.findById(data, function (resp) {
                        $scope.user = resp.data.users;
                        $scope.article = resp.data.article.lists;
                    });
                };
                $scope.getInfoById();

            }])

        ;