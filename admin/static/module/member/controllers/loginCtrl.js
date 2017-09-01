(function () {
    'use strict';
    angular.module('com.module.users')
        .controller('LoginCtrl', ['$scope', '$interval', '$uibModal', 'httpService', '$rootScope', function ($scope, $interval, $uibModal, httpService, $rootScope) {
            $rootScope.styles = 'hold-transition login-page';
            var $ctrl = this;
            $ctrl.items = ['item1', 'item2', 'item3'];
            $ctrl.animationsEnabled = true;
            $scope.model = {
                nickname: 'sss',
                password: '',
                token: ''
            };
            $scope.codeText = '发送短信';
            $scope.sendToken = function () {
                $scope.codeNumber = 5;
                $scope.codeText = $scope.codeNumber;
                $scope.tmir = $interval(function () {
                    $scope.codeNumber--;
                    $scope.codeText = '重新发送(' + $scope.codeNumber + ')';
                    if ($scope.codeNumber < 0) {
                        $scope.codeText = '重新发送(' + $scope.codeNumber + ')';
                        $interval.cancel($scope.tmir);
                    }
                }, 1000);
            };
            $scope.login = function () {
                console.log(this.model);
                httpService.post({ url: '/', data: this.model }, function (res) {
                    console.log(res);
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

    ;
})();