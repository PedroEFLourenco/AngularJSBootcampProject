'use strict'

angular.module('header')
.component('logo',{
  templateUrl:'/header/logo/logo.tpl.html',
  controller:'logoctrl',
  controllerAs:'logoScope',
  bindings:
  {
  nome:'@'
  }
})
.controller('logoctrl',Logoctrl)

function Logoctrl()
{
  var logoScope = this;
}
