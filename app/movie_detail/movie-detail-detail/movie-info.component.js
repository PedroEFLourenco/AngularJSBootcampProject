'use strict'

angular.module('movie_detail')
.component('movieInfoWrapper',
{
  templateUrl: 'movie_detail/movie-detail-detail/movie-info.tpl.html',
  controller: 'movieInfoController',
  controllerAs: 'scopeMovieInfoWrapper'
})
.controller('movieInfoController', movieInfoFunction);
function movieInfoFunction()
{
  var scopeMovieInfoWrapper = this;
  scopeMovieInfoWrapper.VideoURL = 'https://www.youtube.com/watch?v=CUSoJHZe2BE';
}
