angular.module('startPage')
    .controller('launchCtrl', function ($scope) {
    
    $scope.init = function () {
    }
    
    $scope.init();
    
    $scope.launch = function() {
        console.log($scope.keyPresses);
        
    }
})