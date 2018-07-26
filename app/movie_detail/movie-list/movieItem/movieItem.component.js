'use strict'

angular.module('movie_detail')
.component('movieItem',
{
  templateUrl:'movie_detail/movie-list/movieItem/movieItem.tpl.html',
  controller: 'movieItemController',
  controllerAs: 'scopeMovieItem',
  bindings:
  {
    ano: '@',
    nome: '@',
    plot: '@',
    elenco: '=',
    trailer: '@',
    poster: '@',
    rented: '@'
  }
})
.controller('movieItemController', movieItemFunction);

function movieItemFunction()
{
  var scopeMovieItem = this;
}
