angular.module('startPage')
    .controller("HomeCtrl", function($scope, $http) {
    $http({
            url: 'data/hotKeyInfo.json',
            method: 'get',
        })
        .success(function(data, status, headers, config) {
            $scope.projects = data;
        
            $scope.music = true;
            $scope.fun = true;
            $scope.games = true;
            $scope.programming = true;
            $scope.social = true;
            $scope.surfing = true;
            $scope.anime = true;
            $scope.other = true;
        
            console.log($scope.projects);
            
        })
        .error(function(data, status, headers, config) {
        // Log here. 
        });
});

    