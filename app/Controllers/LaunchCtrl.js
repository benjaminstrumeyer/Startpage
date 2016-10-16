app
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
            
    function openWindows(uniqueHotKeys, hotKeyInfo) {
        
        if (!uniqueHotKeys.length) {
            return;
        }

        var first = uniqueHotKeys[0];
        uniqueHotKeys.splice(0,1);
        uniqueHotKeys.push(first);
                
        for (let i=0; i < uniqueHotKeys.length; i++) {
            let launchInformation = hotKeyInfo.find(keyPress => keyPress.hotkey.toLowerCase() === uniqueHotKeys[i].toLowerCase());
            
            if (i !== uniqueHotKeys.length - 1)
                $window.open(launchInformation.url);
            else
                $window.open(launchInformation.url, "_self");
        }
    };
    
    
})