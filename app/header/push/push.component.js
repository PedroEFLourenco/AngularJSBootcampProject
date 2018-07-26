'use strict'

angular.module('header')
.component('shoppingcart',
{
  templateUrl: '/header/push/push.tpl.html',
  controller:'shoppingCartCtrl',
  controllerAs:'shoppingCartScope'
})
.controller('shoppingCartCtrl',cartCtrl)

function cartCtrl()
{
  var shoppingCartScope = this;
}
