'use strict'

angular.module('header')
.component('searchcomponent',
{
  templateUrl:'/header/search/search.tpl.html',
  controller: 'searchControler',
  controllerAs: 'searchScope'
})
.controller('searchControler',searchFunction)

function searchFunction()
{
  var searchScope = this;
  searchScope.searchString = 'filmes de f***';
}
