angular.module('startPage')
    .service('hotKeyInformation', function($http, $q) {    
        
    var hotKeyInformation = this;
    hotKeyInformation.hotKeyList = {};
    
    hotKeyInformation.getHotKeyInformation = function() {
        var defer = $q.defer();
        
        $http.get('data/hotKeyInfo.json')
            .success(function(result) {
                hotKeyInformation.hotKeyList = result;
                defer.resolve(result);         
            })
            .error(function(res) {
                defer.reject(error);
            })
        return defer.promise;
    }
    
});

//        return {
//            getHotKeyInfo: function(category) {
//                return $http.get('data/hotKeyInfo.json')
//                        .then(function(result) {
//                        return result.data;
//                });
//            }
//        }

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