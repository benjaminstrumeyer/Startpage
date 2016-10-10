angular.module('startPage')
    .controller('HomeCtrl', function($scope, hotKeyInformation) {

            hotKeyInformation.getHotKeyInfo().then(
            function(response) {
                console.log(response);
                $scope.hotKeyInfo = response;
            });
        
            $scope.music = false;
            $scope.fun = true;
            $scope.games = true;
            $scope.programming = true;
            $scope.social = true;
            $scope.surfing = true;
            $scope.anime = true;
            $scope.other = true;
    });

         //Consider remaking the JSON file with category as a field for each object, to replace the ".Music"-like references which doesn't allow you to access it without a switch statement. 
    
//    function getCategory(hotKeyInformation, category) {
//           switch (category) {
//               case "music":
//                   return hotKeyInformation[0].Music;
//               case "fun":
//                   return hotKeyInformation[0].Fun;
//               case "games":
//                   return hotKeyInformation[0].Games;
//               case "programming": 
//                   return hotKeyInformation[0].Programming;
//               case "social":
//                   return hotKeyInformation[0].Social;
//               case "surfing":
//                   return hotKeyInformation[0].Surfing;
//               case "anime":
//                   return hotKeyInformation[0].Anime;
//               case "other":
//                   return hotKeyInformation[0].Other;
//               default: 
//                   break;
//           }
//    }

    