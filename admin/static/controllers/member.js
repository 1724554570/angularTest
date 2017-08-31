angular.module('anApp').controller('memberListCtrl', ['$rootScope', '$scope',
    function ($rootScope, $scope) {
        $rootScope.menu = 'memberList';
        $scope.text = "首页";
    }])
        .controller('memberEidtCtrl', ['$rootScope', '$scope',
            function ($rootScope, $scope) {
                $rootScope.menu = 'memberList';
                $scope.text = "修改用户";
            }])

        ;