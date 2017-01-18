angular.module('anApp').run(function($rootScope,$state){$rootScope.goto=function(){$state.go('app.home');};$rootScope.goto();});
angular.module('anApp').controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});