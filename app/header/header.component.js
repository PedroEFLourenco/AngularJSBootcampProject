'use strict'

angular.module('header')
  .component('wrapperheader', {
    templateUrl: '/header/header.tpl.html',
    controller: 'headerCtrl',
    controllerAs: 'vm'
  })
  .controller('headerCtrl', HeaderCtrl)

function HeaderCtrl() {
  var vm = this;
  vm.gameOfThrones = "almost there";
  vm.dataDeHoje = new Date();
}
