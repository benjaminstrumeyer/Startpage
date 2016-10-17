app
    .controller('HotKeyVisualizationCtrl', function ($scope, hotKeyInit, hotKeyInformation) {
    
    $scope.init = function() {
        
        var initHotKeys = hotKeyInit.uniqueKeyPresses();
        console.log(initHotKeys);
        
        $scope.imgPaths = hotKeyInit.initImgPaths();
    
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