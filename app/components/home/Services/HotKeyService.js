angular.module('startPage')
    .service('hotKeyInformation', function($http) {    
        return {
    getHotKeyInfo: function() {
        return $http.get('data/hotKeyInfo.json')
        .then(function(result) {
            return result.data;
        });
    }
   }
});

//        return {
//            getHotKeyInfo : function(callback) {
////                $http.get('data/hotKeyInfo.json').success(callback);
//                $http({
//                    url: 'data/hotKeyInfo.json',
//                    method: 'get',
//                })
//                .success(function(result, status, headers, config) {
////                    console.log(data);
//                    return result.data;
//                })
//                .error(function(result, status, headers, config) {
//                    // Log here. 
//                })
//                    }
//                }
//        });
//    