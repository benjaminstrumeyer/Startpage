angular.module('startPage')
    .directive('hotkey', function() {
        return {
            restrict: "E",
            scope: {
                category: "&category"
            },
            transclude: false,
            templateUrl: 'app/components/home/HotKeys/HotKeyLists.html',
            controler: "/app/components/home/Controllers/HomeCtrl.js"
        }
               
    });