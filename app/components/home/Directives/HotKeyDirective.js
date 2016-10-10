angular.module('startPage')
    .directive('hotkey', function() {
        return {
            restrict: "E",
            scope: {
                category: "@category"
            },
            transclude: false,
            templateUrl: "app/components/home/HotKeys/hotkeylist.html",
//            template: "<div>{{category}}</div>", << This is the code in the templateUrl. 
            controller: "app/components/home/Controllers/HomeCtrl.js"
        }
               
});