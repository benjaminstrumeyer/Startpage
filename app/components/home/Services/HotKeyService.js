angular.module('startPage')
    .factory('hotKeyInformation', function($http) {    
        return {
            getHotKeyInfo: function(category) {
                return $http.get('data/hotKeyInfo.json')
                        .then(function(result) {
                        return result.data;
                });
            }
        }
});

//angular.module('startPage')
//    .service('hotKeyInformation', function($http) {    
//        return {
//            getHotKeyInfo : function(callback) {
//                $http({
//                    url: 'data/hotKeyInfo.json',
//                    method: 'get',
//                })
//                .success(function(data, status, headers, config) {
////                    console.log(data);
//                    return data;
//                })
//                .error(function(data, status, headers, config) {
//                    // Log here. 
//                })
//                    }
//                }
//    });