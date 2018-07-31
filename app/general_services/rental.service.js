'use strict'

angular.module('myApp').
service('rentalService',pushFunction);

function pushFunction()
{

this.rentedCount = 0;

this.pushToCart = function pushToCart(movieName)
{
  this.rentedCount++;
}

this.removeFromCart = function removeFromCart(movieName)
{
  this.rentedCount --;
}

}
