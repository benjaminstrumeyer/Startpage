app
    .controller('launchCtrl', function ($scope, $rootScope, $window, hotKeyInformation) {

    // User's hotkey presses
    $scope.keyPresses = "";

    $scope.$watch(function() {
        return $scope.keyPresses;
    },
    function(newVal, oldVal) {
        $rootScope.uniqueHotKeys = hotKeyInformation.getUniqueKeyPresses($scope.keyPresses);
    });

    // Launches the apps when "Enter" is pressed
    $scope.launch = function() {
        openWindows($rootScope.uniqueHotKeys);
    };

    // Opens the windows for the hotkey presses
    function openWindows(uniqueHotKeys) {
        
        if (!uniqueHotKeys.length) {
            return;
        }

        // To push the first in the list to the end of the list
        // Because we want to open the first tab LAST
        var first = uniqueHotKeys[0];
        uniqueHotKeys.splice(0,1);
        uniqueHotKeys.push(first);
               
        for (let i=0; i < uniqueHotKeys.length; i++) {
            let hotkey = uniqueHotKeys[i];

            // Check if the tab we want to open is the last tab,
            // If so, open it in the same tab as the start page
            if (i !== uniqueHotKeys.length - 1)
                $window.open(hotkey.url);
            else
                $window.open(hotkey.url, "_self");
        }
    }    
    
})