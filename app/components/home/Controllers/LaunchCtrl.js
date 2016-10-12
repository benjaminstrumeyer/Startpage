angular.module('startPage')
    .controller('launchCtrl', function ($scope, hotKeyInformation) {
    
    $scope.init = function () {
    }
    
    $scope.init();
    
    $scope.launch = function() {
        console.log($scope.keyPresses);
        
        hotKeyInformation.getHotKeyInformation()
            .then(function (result) {
//            console.log(result);
        })
        
        console.log(uniqueKeyPresses($scope.keyPresses));
    }
    
    uniqueKeyPresses = function(string) {
        var result = [];
        for (var i=0; i < string.length; i++) {
            if (!result.includes(string[i])) {
                result.push(string[i]);
            }
        }
        return result;
    }
})