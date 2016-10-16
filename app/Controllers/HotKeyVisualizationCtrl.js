angular.module('startPage')
    .controller('HotKeyVisualizationCtrl', function ($scope, hotKeyInit) {
    
    $scope.init = function() {
        
        var initHotKeys = hotKeyInit.uniqueKeyPresses();
        console.log(initHotKeys);
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