app
    .controller('HotKeyVisualizationCtrl', function ($scope, hotKeyInit, hotKeyInformation) {
    
    $scope.init = function() {
        
        var initHotKeys = hotKeyInit.uniqueKeyPresses();
        console.log(initHotKeys);
        
        var imgPaths = [];
        
        initImgPaths(initHotKeys, imgPaths);        
    
    }
    
    function initImgPaths(initHotKeys, imgPaths) {

        for (let i = 0; i < initHotKeys.length; i++) {

            let imgObj = hotKeyInformation.find(keyPress => keyPress.hotkey.toLowerCase() === initHotKeys[i].toLowerCase());

            console.log(imgObj.nickname);

            imgPath = "assets/img/CategoryIcons/" + imgObj.nickname;

            imgPaths.push(imgPath);
        }
    }

    $scope.init();
})