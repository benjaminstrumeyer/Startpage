app
    .controller('HotKeyVisualizationCtrl', function ($scope, hotKeyInit, hotKeyInformation) {
    
    $scope.init = function() {
        
        var initHotKeys = hotKeyInit.uniqueKeyPresses();
        
        $scope.imgPaths = [];
        
        var imgPaths = [];
//        console.log(imgPaths);
        
        hotKeyInformation.getHotKeyInformation()
            .then(function (result) {
                var uniqueHotKeys = hotKeyInit.uniqueKeyPresses();
                console.log(uniqueHotKeys);
        });
        
        
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
    
//    function initImgPaths(initHotKeys, imgPaths) {
//        
//        var imgPaths = [];
//
//        for (let i = 0; i < initHotKeys.length; i++) {
//
//            let imgObj = hotKeyInformation.find(keyPress => keyPress.hotkey.toLowerCase() === initHotKeys[i].toLowerCase());
//
//            console.log(imgObj.nickname);
//
//            imgPath = "assets/img/HotkeyImages/" + imgObj.imgName + ".png";
//
//            imgPaths.push(imgPath);
//        }
//        
//        return imgPaths;
//    }

    $scope.init();
})