angular.module('startPage')
    .controller('HomeCtrl', function($scope, $timeout) {
    
        $scope.init = function() {
            $scope.music = true;
            $scope.fun = true;
            $scope.games = true;
            $scope.programming = true;
            $scope.social = true;
            $scope.surfing = true;
            $scope.anime = true;
            $scope.other = true;
        }
        
        $scope.init();
    
    
        $scope.toggle = function() {
            $timeout(function () {
                $scope.music = false;
            }, 1000);
        }
    });