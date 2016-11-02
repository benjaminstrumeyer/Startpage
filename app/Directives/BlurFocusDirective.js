app
    .directive('blurfocus', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            //Requires a timeout to work on firefox.
            $(elem).on("blur", () => setTimeout(() => $(elem).focus(), 1));    
        }
    }
});