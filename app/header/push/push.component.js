'use strict'

angular.module('header')
.component('shoppingcart',
{
  templateUrl: '/header/push/push.tpl.html',
  controller:'shoppingCartCtrl',
  controllerAs:'shoppingCartScope'
})
.controller('shoppingCartCtrl',cartCtrl)
cartCtrl.$inject = ['$scope', 'rentalService'];
function cartCtrl($scope, rentalService)
{
  var shoppingCartScope = this;
  shoppingCartScope.numberOfRentals = rentalService.rentedCount;


  $scope.$watch(function(){ return rentalService.rentedCount}, changeCounter);

  function changeCounter(newCount, oldCount)
  {
    if (newCount !== oldCount)
    {
      shoppingCartScope.numberOfRentals = newCount;
    }
  }
}
