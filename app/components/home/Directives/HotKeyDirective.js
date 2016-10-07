angular.module('startPage')
    .directive('hotkey', function() {
        return {
            restrict: "E",
            scope: false,
            transclude: false,
            templateUrl: 'app/components/home/HotKeys/HotKeyLists.html',
        }
               
    });