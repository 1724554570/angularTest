(function () {
    'use strict';
    var baseUrl = 'http://47.94.15.71/gcow/cont';
//    baseUrl = 'http://10.75.104.34:8080/gcow/cont';
    angular.module('com.module.users')
            .controller('LoginCtrl', [
                '$scope', '$interval', '$uibModal', 'userService', '$rootScope', '$state', 'lStore',
                function ($scope, $interval, $uibModal, userService, $rootScope, $state, lStore) {
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
                        token: ''
                    };
                    $scope.codeText = '发送短信';
                    $scope.sendToken = function () {
                        $scope.codeNumber = 5;
                        $scope.codeText = '重新发送(' + $scope.codeNumber + ')';
                        $scope.tmir = $interval(function () {
                            $scope.codeNumber--;
                            $scope.codeText = '重新发送(' + $scope.codeNumber + ')';
                            if ($scope.codeNumber < 0) {
                                $scope.codeText = '重新发送(0)';
                                $interval.cancel($scope.tmir);
                            }
                        }, 1000);
                    };
                    function successAction(res) {
                        res = res || {data: {}};
                        var data = res.data.data;
                        $rootScope.user = data;
                        var log_user = angular.toJson(data);
                        lStore.setValue('log.user', log_user);
                        $state.go('app.home');
                    }

                    //var log_user = angular.toJson($scope.model);
                    //lStore.setValue('log.user', log_user);
                    //$state.go('app.home');

                    $scope.login = function () {
                        var data = {
                            account: this.model.nickname,
                            password: this.model.password,
                            code: this.model.token
                        };
                        userService.logIn(data, function (res) {
                            successAction(res);
                        }, function () {
                            $ctrl.openComponentModal();
                        });
                    };

                    $scope.href = 'http://47.94.15.71/gcow/cont/sys/pictureCheckCode';
                    $scope.loadYzm = function () {
                        $scope.href = 'http://47.94.15.71/gcow/cont/sys/pictureCheckCode';
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
                    $rootScope.pages = {title: '系统管理', tips: [{txt: '系统管理', link: '#'}]};
                }])

            // 管理员列表
            .controller('useraListCtrl', [
                '$rootScope', '$scope', '$state', 'userService', 'editValue',
                function ($rootScope, $scope, $state, userService, editValue) {
                    $rootScope.pages.title = '管理员列表';
                    $rootScope.pages.tips.push({txt: '管理员列表', link: 'app.users.alist'});
                    $rootScope.menu = 'alist';
                    $scope.menus = 'alists';
                    $scope.adminlist = [{id: '', nickname: '', sex: '', headPortrait: '', createTime: ''}];
                    userService.findAList(function (res) {
                        $scope.adminlist = res.data.data;
                    });
                    $scope.onChangeEdit = function (item) {
                        editValue.setter(item);
                    };
                }])

            // 管理员列表
            .controller('userListCtrl', [
                '$rootScope', '$scope', '$state',
                function ($rootScope, $scope, $state) {
                    $rootScope.menu = 'memberList';
                }])

            .controller('userAddCtrl', [
                '$rootScope', '$scope',
                function ($rootScope, $scope) {
                    $rootScope.pages = {
                        title: '添加用户',
                        tips: [{txt: '系统管理', link: '#'}, {txt: '添加用户', link: 'app.users.add'}]
                    };

                    $rootScope.menu = 'memberAdd';
                    $scope.userinfo = {usernick: '', password: ''};
                    // $scope.submit = function () {

                    // };
                }])

            .controller('userEditCtrl', [
                '$rootScope', '$scope', '$state', 'userService', 'editValue',
                function ($rootScope, $scope, $state, userService, editValue) {
                    $scope.userinfo = editValue.getter();
                    var keyLength = Object.keys($scope.userinfo).length;
                    if (keyLength < 1) {
                        $state.go('^.alist');
                    }
                    console.log(JSON.stringify($scope.userinfo));
                    var sendData = {"nickname": "小明女", "account": "3233255144c44355b0c1eb33089d2cf6", "password": "123", "sex": "女"};
                    $scope.editFrom = function () {
                        userService.editAlist(JSON.stringify(sendData), function (res) {
                            console.log(res);
                        });
                    };

                }])

            .controller('ModalInstanceCtrl', [
                '$uibModalInstance', 'items',
                function ($uibModalInstance, items) {
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