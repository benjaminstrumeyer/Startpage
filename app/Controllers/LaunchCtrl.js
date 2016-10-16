angular.module('startPage')
    .controller('launchCtrl', function ($scope, $window, hotKeyInformation, hotKeyInit) {

     $scope.$watch('keyPresses', function (newVal, oldVal) {
       if (!newVal) return;
    
        hotKeyInit.clickedHotKeys.newVal = newVal;
        hotKeyInit.clickedHotKeys.oldVal = oldVal;
    });
    
    $scope.launch = function() {
        
        hotKeyInformation.getHotKeyInformation()
            .then(function (result) {
                var uniqueHotKeys = hotKeyInit.uniqueKeyPresses();
                openWindows(uniqueHotKeys, result);   
            });
    };
    
//    function uniqueKeyPresses(string) {
//        var result = [];
//        for (var i=0; i < string.length; i++) {
//            if (!result.includes(string[i])) {
//                result.push(string[i]);
//            }
//        }
//        return result;
//    };
            
    function openWindows(uniqueKeyPresses, hotKeyInfo) {
        
        if (!uniqueKeyPresses.length) {
            return;
        }

        var first = uniqueKeyPresses[0];
        uniqueKeyPresses.splice(0,1);
        uniqueKeyPresses.push(first);
                
        for (let i=0; i < uniqueKeyPresses.length; i++) {
            let launchInformation = hotKeyInfo.find(keyPress => keyPress.hotkey.toLowerCase() === uniqueKeyPresses[i].toLowerCase());
            
            if (i !== uniqueKeyPresses.length - 1)
                $window.open(launchInformation.url);
            else
                $window.open(launchInformation.url, "_self");
        }
    };
    
    
})