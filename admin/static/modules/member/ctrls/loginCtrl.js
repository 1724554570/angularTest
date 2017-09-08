(function () {
    'use strict';
    var baseUrl = 'http://47.94.15.71/gcow/cont';
    angular.module('com.module.users')
        .controller('LoginCtrl', [
            '$scope', '$interval', '$uibModal', 'httpService', '$rootScope', '$state', 'lStore', 'AccessToken',
            function ($scope, $interval, $uibModal, httpService, $rootScope, $state, lStore, AccessToken) {
                var logUser = lStore.getValue('log.user');
                if (!logUser) {
                    $state.go('login');
                } else {
                    $state.go('app.home');
                }
                $rootScope.styles = 'hold-transition login-page';
                var $ctrl = this;
                $ctrl.items = ['item1', 'item2', 'item3'];
                $ctrl.animationsEnabled = true;
                $scope.model = {
                    nickname: 'xvmin',
                    password: '1234561',
                    token: '122'
                };
                $scope.codeText = '发送短信';
                $scope.sendToken = function () {
                    // $scope.codeNumber = 5;
                    // $scope.codeText = '重新发送(' + $scope.codeNumber + ')';
                    // $scope.tmir = $interval(function () {
                    //     $scope.codeNumber--;
                    //     $scope.codeText = '重新发送(' + $scope.codeNumber + ')';
                    //     if ($scope.codeNumber < 0) {
                    //         $scope.codeText = '重新发送(0)';
                    //         $interval.cancel($scope.tmir);
                    //     }
                    // }, 1000);
                };
                function successAction(res) {
                    res = res || { data: {} };
                    var data = res.data.data;
                    $rootScope.user = data;
                    var log_user = angular.toJson(data);
                    lStore.setValue('log.user', log_user);
                    $state.go('app.home');
                }
                $scope.login = function () {
                    var data = {
                        account: this.model.nickname,
                        password: this.model.password,
                        code: this.model.token,
                    }
                    console.log(data);
                    //return successAction(data);
                    //?account=' + this.model.nickname + '&password=' + this.model.password
                    httpService.get({
                        url: baseUrl + '/sys/login',
                        data: data
                    }, function (res) {
                        console.log(res);
                        successAction(res);
                    }, function (err) {
                        $ctrl.openComponentModal();
                        console.log(err);
                    });

                };

                $ctrl.openComponentModal = function () {
                    var modalInstance = $uibModal.open({
                        animation: $ctrl.animationsEnabled,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'myModalContent.html',
                        controller: 'ModalInstanceCtrl',
                        controllerAs: '$ctrl',
                        resolve: {
                            items: function () {
                                return $ctrl.items;
                            }
                        }
                    });
                    modalInstance.result.then(function (selectedItem) {
                        console.log(selectedItem);
                        $ctrl.selected = selectedItem;
                    }, function () {
                        console.log('modal-component dismissed at: ' + new Date());
                    });
                };

            }])

        .controller('userMainCtrl', [
            '$rootScope', '$scope', '$state',
            function ($rootScope, $scope, $state) {
                $rootScope.navs = 'settings';
            }])

        .controller('userListCtrl', [
            '$rootScope', '$scope', '$state',
            function ($rootScope, $scope, $state) {
                $rootScope.menu = 'memberList';
            }])

        .controller('userAddCtrl', [
            '$rootScope', '$scope',
            function ($rootScope, $scope) {
                $rootScope.menu = 'memberAdd';
                $scope.userinfo = { usernick: '', password: '' };
                // $scope.submit = function () {

                // };
            }])

        .controller('userEditCtrl', [
            '$rootScope', '$scope', '$state', '$stateParams', 'UserService',
            function ($rootScope, $scope, $state, $stateParams, UserService) {
                $scope.userinfo = {};
                //$scope.userinfo = UserService.findById($stateParams.id);

            }])

        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'items', function ($uibModalInstance, items) {
            var $ctrl = this;
            $ctrl.items = items;
            $ctrl.selected = {
                item: $ctrl.items[0]
            };
            $ctrl.ok = function () {
                $uibModalInstance.close($ctrl.selected.item);
            };
            $ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
})();