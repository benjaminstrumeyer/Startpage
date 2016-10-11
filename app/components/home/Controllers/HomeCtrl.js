angular.module('startPage')
    .controller('HomeCtrl', function($scope) {
    
        $scope.init = function() {
            $scope.music = false;
            $scope.fun = true;
            $scope.games = true;
            $scope.programming = true;
            $scope.social = true;
            $scope.surfing = true;
            $scope.anime = true;
            $scope.other = true;
        }
        
        $scope.init();
    
    });