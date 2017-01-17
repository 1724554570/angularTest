angular.module('testApp').run(function($rootScope,$state){$rootScope.goto=function(){$state.go('app.home');};$rootScope.goto();});
angular.module('testApp').controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});