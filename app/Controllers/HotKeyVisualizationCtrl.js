app
    .controller('HotKeyVisualizationCtrl', function ($scope, hotKeyInit, hotKeyInformation) {

    var init = function() {
        
        var initHotKeys = hotKeyInit.getUniqueKeyPresses();
        
        $scope.imgPaths = [];
        
        var imgPaths = [];
        

//        console.log(imgPaths);
       
        
//        $scope.$watch('hotKeyInit.imgPaths', function (newVal, oldVal) {
//            if (!newVal) return;
//    
//           $scope.imgPaths = hotKeyInit.initImgPaths();
//        });
//        
//        var uniqueHotKeys = hotKeyInit.uniqueKeyPresses();
////        console.log(uniqueHotKeys);
//        
//        var test = hotKeyInit.initImgPaths();
////        console.log(test);
//        
        
    
    }

    init();
})