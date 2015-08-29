'use strict';

angular.module('cartApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl'
      });
  });
