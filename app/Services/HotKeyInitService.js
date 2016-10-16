app
    .service('hotKeyInit', function() {
    
        var hotKeyInit = this;

        hotKeyInit.clickedHotKeys = {};
    
        hotKeyInit.uniqueKeyPresses = function() {
            var result = [];
            
            
            for (var i=0; i < hotKeyInit.clickedHotKeys.newVal.length; i++) {
                if (!result.includes(hotKeyInit.clickedHotKeys.newVal[i])) {
                    result.push(hotKeyInit.clickedHotKeys.newVal[i]);
                }
            }
            return result;
        };
    
        return hotKeyInit;
});