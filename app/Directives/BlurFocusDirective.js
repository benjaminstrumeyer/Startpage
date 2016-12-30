app
    .directive('blurfocus', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            //Quick Async fix. 
            $(elem).on("blur", () => setTimeout(() => $(elem).focus(), 0));    
        }
    }
});