app
    .directive('blurfocus', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $(elem).on("blur", () => $(elem).focus());
        }
    }         
});