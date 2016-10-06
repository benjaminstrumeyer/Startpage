angular.module('startPage')
    .controller("HomeCtrl", function($scope, $http) {
        $scope.music = true;
        $scope.fun = true;
        $scope.games = true;
        $scope.programming = true;
        $scope.social = true;
        $scope.surfing = true;
        $scope.anime = true;
        $scope.other = true;
});

    