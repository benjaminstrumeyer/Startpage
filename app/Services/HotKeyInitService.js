app
    .service('hotKeyInit', function(hotKeyInformation) {
    
        var hotKeyInit = this;

        hotKeyInit.clickedHotKeys = {
            newVal: "",
            oldVal: ""
        };
    
        hotKeyInit.uniqueHotKeys = []; 
    
        hotKeyInit.imgPaths = [];
    
        hotKeyInit.uniqueKeyPresses = function() {
                     
            for (let i = 0; i < hotKeyInit.clickedHotKeys.newVal.length; i++) {
                if (!hotKeyInit.uniqueHotKeys.includes(hotKeyInit.clickedHotKeys.newVal[i])) {
                    hotKeyInit.uniqueHotKeys.push(hotKeyInit.clickedHotKeys.newVal[i]);
                }
            }
//            console.log(hotKeyInit.uniqueHotKeys);
            return hotKeyInit.uniqueHotKeys;
        };
    
        hotKeyInit.initImgPaths = function() {
            
            var uniqueHotKeys = this.uniqueKeyPresses();
            console.log('uniqueHotKeys', uniqueHotKeys);

                let imgObj = hotKeyInformation.find(keyPress => keyPress.hotkey.toLowerCase() === uniqueHotKeys[i].toLowerCase());

//                console.log(imgObj.imgName);

                imgPath = "assets/img/HotkeyImages/" + imgObj.imgName + ".png";

                this.imgPaths.push(imgPath);

            return hotKeyInit.imgPaths;
        }
});