'use strict'

angular.module('movie_detail')
.component('movielist',
{
  templateUrl:'/movie_detail/movie-list/movie-list.tpl.html',
  controller: 'movieListController',
  controllerAs: 'movieListScope'
})
.controller('movieListController', movieListFunction);

movieListFunction.$inject=['movieProvider'];

function movieListFunction(movieProvider)
{


  var movieListScope = this;
  movieListScope.indexSelected=0;
  
  movieListScope.moviesDB = movieProvider.getMovieDB();



movieListScope.select = function select(indexToSelect)
{
  movieListScope.indexSelected = indexToSelect;
  movieProvider.setMovieIndex(indexToSelect);
}

}
