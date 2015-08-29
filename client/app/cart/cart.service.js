'use strict';

angular.module('cartApp')
  .factory('cartService', ["$rootScope", "$cookieStore", function ($rootScope, $cookieStore) {
        
    var cart = [];
    
    var cookieUpdate = function () {
    
        $cookieStore.put('cartCookies', cart);
    };
    
    var hasCookie = $cookieStore.get('cartCookies');

    if(hasCookie) {

        cart = hasCookie;
        
    }
    
    return {
        
        addToCart : function(itemObject) {
            
            var notpresent = true;
                    
            for(var i=0; i<cart.length; i++){

                if(angular.equals(itemObject, cart[i].item))
                        {
                            notpresent = false;
                            cart[i].count++;
                        }
            }


            if(notpresent)
                {
                    cart.push({item:itemObject, count:1});
                    
                }

            cookieUpdate();
            $rootScope.$broadcast("updatecart");
            
        },
        
        removeFromCart : function(itemObject) {
        
            var present = false;

            var temp = itemObject;

            for(var i=0; i<cart.length; i++){

                if(angular.equals(itemObject, cart[i]))
                        {

                            if(cart[i].count > 1)
                                {
                                    cart[i].count -= 1;

                                }
                            else {

                                cart.splice(i, 1);

                            }
                        }
            }

            cookieUpdate();  
            $rootScope.$broadcast("updatecart");
        },
        
        loadCart : function () {
            
            cookieUpdate();
            return cart;
        }
    }
        
}]);