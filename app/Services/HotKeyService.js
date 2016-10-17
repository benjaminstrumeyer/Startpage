app
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