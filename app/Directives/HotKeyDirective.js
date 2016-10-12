angular.module('startPage')
    .directive('hotkey', function(hotKeyInformation) {
        return {
            restrict: "E",
            scope: {
                category: "@"
            },
            templateUrl: "app/Directives/HotKeys/hotkeylist.html",
            link: function(scope, elem, attrs) {
                hotKeyInformation.getHotKeyInformation()
                .then(function(result) {
                    var serviceResults = result;
                    scope.hotkeys = serviceResults.filter(hotkey => hotkey.category === scope.category);
                }) 
            }
        }
               
});

 //Consider remaking the JSON file with category as a field for each object, to replace the ".Music"-like references which doesn't allow you to access it without a switch statement. 