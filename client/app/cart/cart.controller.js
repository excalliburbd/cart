'use strict';

var app = angular.module('cartApp');

app.controller("CartCtrl",["$scope", function($scope) {

}]);

app.controller("IndexCtrl", ["$scope", "$log", "$http", "cartService", function($scope, $log, $http, cartService) {
        
    $http.get("http://www.w3schools.com/angular/customers.php")
        .success(function(response) {
        
            $scope.items = [];
            var length = response.records.length;
            for (var i=0; i<length; i+=3) {
                
                $scope.items.push(response.records.slice(i, i+3));
            }                
            
            if(length % 3 != 0) {
                
                $scope.items.push(response.records.slice(length-length%3, length%3));
            }
        });

    $scope.inputfields = {};

    $scope.submit = function() {

        $http.post("/api/products", $scope.inputfields).success($log.info("Yay!!!!"))
    }
    
    $scope.addToCart = function (itemObj) {
        
        cartService.addToCart(itemObj);   
    }
    
    
}]);

app.controller("ItemCtrl", ["$scope", "$log", "cartService", function($scope, $log, cartService) {
    
    $scope.cart = cartService.loadCart();
    
    $scope.$on("updatecart", function () {
        
        $scope.cart = cartService.loadCart();
        
    });
    $scope.removeFromCart = function(itemObj){
        cartService.removeFromCart(itemObj);
    }
    
}]);
    
