(function () {
    'use strict';
    var baseUrl = 'http://www.osanwen.com/gcow/cont';
    baseUrl = 'http://47.94.15.71/gcow/cont';
    baseUrl = ("www.osanwen.com" === document.domain) ? ('/gcow/cont') : (baseUrl);
    angular.module('com.module.users')
            // 登录控制
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
                        delete data.password;
                        var log_user = angular.toJson(data);
                        lStore.setValue('log.user', log_user);
                        $state.go('app.home');
                    }
                    //var log_user = angular.toJson($scope.model);
                    //lStore.setValue('log.user', log_user);
                    //$state.go('app.home');
                    $scope.login = function () {
                        var data = {account: this.model.nickname, password: this.model.password, code: this.model.token};
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
            // 管理员中控
            .controller('userMainCtrl', [
                '$rootScope', '$scope', '$state',
                function ($rootScope, $scope, $state) {
                    $rootScope.navs = 'settings';
                    $rootScope.pages = {title: '系统管理', tips: [{txt: '系统管理', link: '#'}]};
                }])
            // 管理员列表
            .controller('useraListCtrl', [
                '$rootScope', '$scope', '$state', 'userService', 'editValue', 'lStore',
                function ($rootScope, $scope, $state, userService, editValue, lStore) {
                    $rootScope.pages.title = '管理员列表';
                    $rootScope.pages.tips.push({txt: '管理员列表', link: 'app.users.alist'});
                    $rootScope.menu = 'alist';
                    $scope.menus = 'alists';
                    $scope.adminlist = [{id: '', nickname: '', sex: '', headPortrait: '', createTime: ''}];
                    userService.findAList(function (res) {
                        $scope.adminlist = res.data.data;
                    });
                    $scope.onChangeEdit = function (item) {
                        // editValue.setter(item);
                        lStore.setValue('edit_user', angular.toJson(item));
                    };
                }])
            // 管理员列表
            .controller('userListCtrl', [
                '$rootScope', '$scope', '$state',
                function ($rootScope, $scope, $state) {
                    $rootScope.menu = 'memberList';
                }])
            // 添加管理员
            .controller('userAddCtrl', [
                '$rootScope', '$scope', 'userService', 'FileUploader',
                function ($rootScope, $scope, userService, FileUploader) {
                    $rootScope.pages.title = '添加用户';
                    $rootScope.pages.tips.push({txt: '添加用户', link: 'app.users.add'});
                    $rootScope.menu = 'memberAdd';
                    $scope.info = {nickname: '', account: '', password: '', headPortrait: '', sex: ''};
                    $scope.addFrom = function () {
                        userService.add($scope.info, function (resp) {
                            //console.log(resp);
                            var json = resp.data;
                            alert(json.message);
                            if (json.code === 201) {
                                $scope.info = {nickname: '', account: '', password: '', headPortrait: '', sex: ''};
                            }
                        });
                    };
                    var loaderFile = $scope.uploader = new FileUploader({url: baseUrl + '/sys/upHeadPortrait'});
                    loaderFile.filters.push({
                        name: 'imageFilter',
                        fn: function (item /*{File|FileLikeObject}*/, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            var flag = '|jpg|png|jpeg|bmp|gif|JPG|PNG|'.indexOf(type) !== -1;
                            //,仅支持jpg,jpg,jpeg,bmp,gif后缀类型!
                            if (!flag) {
                                alert('上传图片格式不对');
                            }
                            return flag;
                        }
                    });
                    loaderFile.onSuccessItem = function (item, response, status, headers) {
                        if (response.code === 201) {
                            var imgPath = response.data[0].fileUrl;
                            $scope.info.headPortrait = imgPath;
                        } else {
                            alert(response.message);
                        }
                    };
                }])
            // 修改管理员
            .controller('userEditCtrl', [
                '$rootScope', '$scope', '$state', 'userService', 'lStore', 'FileUploader',
                function ($rootScope, $scope, $state, userService, lStore, FileUploader) {
                    $rootScope.menu = 'alist';
                    //$scope.userinfo = editValue.getter();
                    $scope.info = {};
                    var userinfo = lStore.getValue('edit_user');
                    if (typeof userinfo === 'string' && userinfo) {
                        $scope.info = angular.fromJson(userinfo);
                        $scope.info.password = '';
                        //$scope.info.headPortrait = '//image.tianjimedia.com/uploadImages/2015/067/49/UO0746D87FB1.jpg';
                    } else {
                        $state.go('^.alist');
                    }
                    var keyLength = Object.keys($scope.info).length;
                    if (keyLength < 1) {
                        $state.go('^.alist');
                    }
                    $scope.editFrom = function () {
                        var th = $scope.info,
                                sendData = {nickname: th.nickname, account: th.account, password: th.password, headPortrait: th.headPortrait, sex: th.sex};
                        if (th.password === '') {
                            alert('请输入密码');
                            //delete sendData.password;
                            return;
                        }
                        console.log(sendData);
                        userService.editAlist(sendData, function (resp) {
                            console.log(resp);
                            var json = resp.data;
                            alert(json.message);
                        });
                    };
                    var loaderFile = $scope.uploader = new FileUploader({url: baseUrl + '/sys/upHeadPortrait'});
                    loaderFile.filters.push({
                        name: 'imageFilter',
                        fn: function (item /*{File|FileLikeObject}*/, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            var flag = '|jpg|png|jpeg|bmp|gif|JPG|PNG|'.indexOf(type) !== -1;
                            //,仅支持jpg,jpg,jpeg,bmp,gif后缀类型!
                            if (!flag) {
                                alert('上传图片格式不对');
                            }
                            return flag;
                        }
                    });
                    loaderFile.onSuccessItem = function (item, response, status, headers) {
                        console.log(response);
                        if (response.code === 201) {
                            var imgPath = response.data[0].fileUrl;
                            $scope.info.headPortrait = imgPath;
                        } else {
                            alert(response.message);
                        }
                    };
                }])
            // 弹出框
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