app
    .service('hotKeyInformation', function($http, $q) {    
        
    var self = this;

    self.hotKeyList = [];
    
    var getHotKeyInformation = function() {        
        $http.get('data/hotKeyInfo.json')
            .success(function(result) {
                self.hotKeyList = result;

                console.log(self.hotKeyList)
            });
    };

    getHotKeyInformation();
        
    // TODO: might need better naming
    self.getUniqueKeyPresses = function(keyPresses) {
        var uniqueHotKeys = [];

        for (let hotkey of keyPresses) {
            let hotkeyInfo = self.hotKeyList.find(info => info.hotkey.toLowerCase() === hotkey.toLowerCase());
            if (hotkeyInfo && !uniqueHotKeys.includes(hotkeyInfo)) {
                hotkeyInfo.imgPath = getImagePath(hotkeyInfo);
                 uniqueHotKeys.push(hotkeyInfo);
            }
        }
        return uniqueHotKeys;
    };

    function getImagePath(hotkeyInfo)
    {
        return "assets/img/HotkeyImages/" + hotkeyInfo.imgName + ".png";
    }
}); 