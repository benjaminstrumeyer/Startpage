app
    .service('hotKeyInit', function() {
    
        var hotKeyInit = this;

        hotKeyInit.clickedHotKeys = {
            newVal: "",
            oldVal: ""
        };
    
        hotKeyInit.uniqueHotKeys = [];
    
        hotKeyInit.uniqueKeyPresses = function() {
                     
            for (var i=0; i < hotKeyInit.clickedHotKeys.newVal.length; i++) {
                if (!hotKeyInit.uniqueHotKeys.includes(hotKeyInit.clickedHotKeys.newVal[i])) {
                    hotKeyInit.uniqueHotKeys.push(hotKeyInit.clickedHotKeys.newVal[i]);
                }
            }
            return hotKeyInit.uniqueHotKeys;
        };
});