angular.module('startPage')
    .controller('HotKeyVisualizationCtrl', function ($scope, hotKeyInit, hotKeyInformation) {
    
    $scope.init = function() {
        
        var initHotKeys = hotKeyInit.uniqueKeyPresses();
        console.log(initHotKeys);
        
        var imgPaths = [];
        
        for (let i = 0; i < initHotKeys.length; i++) {
            
            let imgName = hotKeyInformation.find(keyPress => keyPress.hotkey.toLowerCase() === initHotKeys[i].toLowerCase());
            
            console.log(imgName.nickname);

        }
        
//        console.log(initHotKeys);
    
    }
    
//    $scope.$watch('initHotKeys', function(oldVal, newVal) {
//            if (!newVal) return;
//            
//            console.log(oldVal);
//            console.log(newVal);
//        });
    
//    $scope.$watch('keyPresses', function (newVal, oldVal) {
//       if (!newVal) return;
//    
//        keyPresses.clickedHotKeys.newVal = newVal;
//        keyPresses.clickedHotKeys.oldVal = oldVal;
//    });
    
    $scope.init();
})