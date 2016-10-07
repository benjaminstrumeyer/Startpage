angular.module('startPage')
    .controller("HomeCtrl", function($scope, $http) {
    $http({
            url: 'data/hotKeyInfo.json',
            method: 'get',
        })
        .success(function(data, status, headers, config) {
            $scope.hotKeyInformation = data;
        
            $scope.music = true;
            $scope.fun = true;
            $scope.games = true;
            $scope.programming = true;
            $scope.social = true;
            $scope.surfing = true;
            $scope.anime = true;
            $scope.other = true;
        
            console.log($scope.hotKeyInformation);
            var test = $scope.hotKeyInformation[0];
            console.log($scope.hotKeyInformation[0].Music[0].nickname);
        })
        .error(function(data, status, headers, config) {
        // Log here. 
        });
    
//    function getCategory(category, hotKeyInformation, type) {
//        
//    }
});

    