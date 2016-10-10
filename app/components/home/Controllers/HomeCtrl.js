angular.module('startPage')
    .controller('HomeCtrl', function($scope, hotKeyInformation) {

            hotKeyInformation.getHotKeyInfo('Music').then(
            function(response) {
                console.log(response);
                $scope.hotKeyInfo = response;
                $scope.Music = getCategory($scope.hotKeyInfo, 'Music');
                $scope.Fun = getCategory($scope.hotKeyInfo, 'Fun');
                $scope.Games = getCategory($scope.hotKeyInfo, 'Games');
                $scope.Programming = getCategory($scope.hotKeyInfo, 'Programming');
                $scope.Social = getCategory($scope.hotKeyInfo, 'Social');
                $scope.Surfing = getCategory($scope.hotKeyInfo, 'Surfing');
                $scope.Anime = getCategory($scope.hotKeyInfo, 'Anime');
                $scope.Other = getCategory($scope.hotKeyInfo, 'Other');
                
            });
        
            $scope.music = false;
            $scope.fun = true;
            $scope.games = true;
            $scope.programming = true;
            $scope.social = true;
            $scope.surfing = true;
            $scope.anime = true;
            $scope.other = true;
    
            $scope.gethotKeyData = function() {
                return $scope.hotKeyInfo;
            }
            
        function getCategory(hotKeyInformation, category) {
           switch (category) {
               case "Music":
                   return hotKeyInformation[0].Music;
               case "Fun":
                   return hotKeyInformation[1].Fun;
               case "Games":
                   return hotKeyInformation[2].Games;
               case "Programming": 
                   return hotKeyInformation[3].Programming;
               case "Social":
                   return hotKeyInformation[4].Social;
               case "Surfing":
                   return hotKeyInformation[5].Surfing;
               case "Anime":
                   return hotKeyInformation[6].Anime;
               case "Other":
                   return hotKeyInformation[7].Other;
               default: 
                   break;
           }
    }
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

    