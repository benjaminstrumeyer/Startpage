//angular.module('startPage')
//    .filter('category', function() {
//    
//    return function(items, category) {
//        
//        var result = [];
//        
////        angular.forEach(hotkeyData, function(category) {
////            if (hotkeyData.category === category) {
////                out.push(hotkeyData);
////            }
////        })
//        
//        for(var i=0; i<items.length; i++) {
//            if (hotkeyData[i].category === category) {
//                result.push(hotKeydata[i]);
//            }
//        }
//        
//        return result;
//    };
//});

angular.module('startPage').filter('category', function(){
    
    return function(items, name){
        
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            if (items[i].category === category) {
                arrayToReturn.push(items[i]);
            }
        }
        
        return arrayToReturn;
    };
});