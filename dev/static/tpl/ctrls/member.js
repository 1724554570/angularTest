/**
 * 用户信息中心
 * @type type
 */
angular.module('testApp')
        .controller('myselfController', ['$scope', 'localStorage',
            function($scope, localStorage) {
                $scope.nav = {all: true, pro: false, qas: false, abo: false};
                $scope.info1 = "项目";
                $scope.times = function(times) {
                    var rtime = parseInt(times) * 1000;
                    return new Date(rtime).toLocaleString().substr(0, 10);
                };
            }])
        .controller('infoController', ['$scope', 'localStorage', 'userInfoService', '$state', '$stateParams', 'vaulesFactory', function($scope, localStorage, userInfoService, $state, $stateParams, vaulesFactory) {
                localStorage.setValue('_csrf', "");

                $scope.showSimple = function(product) {
                    //vaulesFactory.setter(product);
                    $state.go('pro.artdetail', {id: product.id});
                };

                $scope.getInfoById = function() {
                    var data = {id: $stateParams.id};
                    userInfoService.findById(data, function(resp) {
                        $scope.user = resp.users;
                        $scope.pros = resp.pros;
                    });
                };
                $scope.getInfoById();

            }])

        ;