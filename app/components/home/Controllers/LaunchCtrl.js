angular.module('startPage')
    .controller('launchCtrl', function ($scope, hotKeyInformation, $window) {

    $scope.launch = function() {
        
        hotKeyInformation.getHotKeyInformation()
            .then(function (result) {
           
            var uniqueHotKeys = uniqueKeyPresses($scope.keyPresses);
            openWindows(uniqueHotKeys, result);
            
        });  
    }
    
    uniqueKeyPresses = function(string) {
        var result = [];
        for (var i=0; i < string.length; i++) {
            if (!result.includes(string[i])) {
                result.push(string[i]);
            }
        }
        return result;
    }
    
    openWindows = function(uniqueKeyPresses, hotKeyInfo) {
        if (uniqueKeyPresses.length === 0) {
            return;
        }
        
        var launchInformation;
        
        for (var i=0; i < uniqueKeyPresses.length; i++) {
            launchInformation = hotKeyInfo.filter(keyPress => keyPress.hotkey.toLowerCase() === uniqueKeyPresses[i].toLowerCase());
            
            $window.open(launchInformation[0].url);
        }
    }
})