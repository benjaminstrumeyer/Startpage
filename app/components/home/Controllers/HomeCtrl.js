angular.module('startPage')
    .controller('HomeCtrl', function($scope) {
    
        $scope.init = function() {
            $scope.music = false;
            $scope.fun = false;
            $scope.games = false;
            $scope.programming = false;
            $scope.social = false;
            $scope.surfing = false;
            $scope.anime = false;
            $scope.other = false;
        }
        
        $scope.init();
    
    });