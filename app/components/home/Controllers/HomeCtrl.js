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
        })
        .error(function(data, status, headers, config) {
        // Log here. 
        });
    
    function getCategory(hotKeyInformation, category) {
           switch (category) {
               case "music":
                   return hotKeyInformation[0].Music;
               case "fun":
                   return hotKeyInformation[0].Fun;
               case "games":
                   return hotKeyInformation[0].Games;
               case "programming": 
                   return hotKeyInformation[0].Programming;
               case "social":
                   return hotKeyInformation[0].Social;
               case "surfing":
                   return hotKeyInformation[0].Surfing;
               case "anime":
                   return hotKeyInformation[0].Anime;
               case "other":
                   return hotKeyInformation[0].Other;
               default: 
                   break;
           }
    }
});

    