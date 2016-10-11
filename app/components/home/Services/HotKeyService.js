angular.module('startPage')
    .service('hotKeyInformation', function($http, $q) {    
        
    var hotKeyInformation = this;
    
    hotKeyInformation.getHotKeyInformation = function() {
        var defer = $q.defer();
        
        $http.get('data/hotKeyInfo.json')
            .success(function(res) {
                defer.resolve(res);         
            })
            .error(function(res) {
                defer.reject(err);
            })
        return defer.promise;
    }
    
    return hotKeyInformation;
    
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