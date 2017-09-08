angular.module('anApp')
    .controller('appController', [
        '$scope', '$state', '$rootScope', 'lStore', 'AccessToken',
        function ($scope, $state, $rootScope, lStore, AccessToken) {
            $rootScope.styles = 'hold-transition skin-blue sidebar-mini';
            var bheight = window.screen.height - 50, bheight = (bheight < 600) ? 600 : bheight;
            $scope.open = false;
            $scope.contentHeight = bheight;
            $scope.user = { nickname: 'Machine', face: 'theme/adminLTE2/img/user2-160x160.jpg' };
            $scope.openEvent = function () {
                var c = (this.open) ? false : true;
                $scope.open = c;
            };
            var logUser = lStore.getValue('log.user');
            if (logUser) {
                logUser = angular.fromJson(logUser);
                $scope.user = angular.extend($scope.user, logUser);
                $rootScope.user = logUser;
            }
            if (!$rootScope.user) {
                $state.go('login');
            }

            $scope.menus = [
                {
                    menuname: '系统管理',
                    class: 'settings',
                    menuchild: [
                        { text: "Dashboard", link: "app.home", class: 'home' },
                        { text: "管理员列表", link: "app.users.list", class: 'users_list' },
                        { text: "添加用户", link: "", class: '' }
                    ]
                },
                {
                    menuname: '商家信息管理',
                    class: 'product',
                    menuchild: [
                        { text: "商家注册申请列表", link: "", class: '' },
                        // { text: "添加用户", link: "" }
                    ]
                },
                {
                    menuname: '话题圈管理',
                    class: 'huatiquan',
                    menuchild: [
                        { text: "话题圈列表", link: "", class: '' },
                        { text: "创建话题圈", link: "", class: '' }
                    ]
                },
                {
                    menuname: '笔记管理',
                    class: 'biji',
                    menuchild: [
                        { text: "笔记列表", link: "", class: '' },
                        { text: "创建话题圈", link: "", class: '' }
                    ]
                },
                {
                    menuname: '用户管理',
                    class: 'users',
                    menuchild: [
                        { text: "用户列表", link: "", class: '' },
                        //{ text: "创建话题圈", link: "" }
                    ]
                }
            ];
            
        }])
    .controller('apphomeController', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
            $rootScope.menu = 'home';
            //$rootScope.navs = 'settings';
            $scope.text = "首页";
        }])
    ;
