angular.module('startPage')
    .directive('hotkey', function(hotKeyInformation) {
        return {
            restrict: "E",
            scope: {
                category: "="
            },
            templateUrl: "app/components/home/HotKeys/hotkeylist.html"
        }
               
});

 //Consider remaking the JSON file with category as a field for each object, to replace the ".Music"-like references which doesn't allow you to access it without a switch statement. 