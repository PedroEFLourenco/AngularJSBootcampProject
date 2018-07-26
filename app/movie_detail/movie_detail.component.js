'use strict'

angular.module('movie_detail')
.component('movieDetailWrapper',
{
  templateUrl:'/movie_detail/movie_detail.tpl.html',
  controller:'movieDetailController',
  controllerAs: 'scopeMovieDetailWrapper'
})
.controller('movieDetailController',MDFunction);

function MDFunction()
{
  var scopeMovieDetailWrapper = this;
}
