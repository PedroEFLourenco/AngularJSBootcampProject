'use strict'

angular.module('movie_detail')
  .component('movieInfoWrapper', {
    templateUrl: 'movie_detail/movie-detail-detail/movie-info.tpl.html',
    controller: 'movieInfoController',
    controllerAs: 'movieInfoWrapperScope'
  })
  .controller('movieInfoController', movieInfoFunction);

movieInfoFunction.$inject = ['$scope', 'movieProvider'];

function movieInfoFunction($scope, movieProvider) {
  var movieInfoWrapperScope = this;

  movieInfoWrapperScope.videoURL = movieProvider.getSelectedMovie().trailer;
  movieInfoWrapperScope.poster = movieProvider.getSelectedMovie().poster;
  movieInfoWrapperScope.plot = movieProvider.getSelectedMovie().plot;
  movieInfoWrapperScope.elenco = movieProvider.getSelectedMovie().elenco;
  movieInfoWrapperScope.ano = movieProvider.getSelectedMovie().ano;
  movieInfoWrapperScope.nome = movieProvider.getSelectedMovie().nome;





  $scope.$watch(function() {
    return movieProvider.getSelectedMovie()
  }, function changeMovieInfo(newMovie, oldMovie) {
    console.log('tou no watch ' + movieProvider.getSelectedMovieIndex());

    if (newMovie !== oldMovie) {
      movieInfoWrapperScope.videoURL = movieProvider.getSelectedMovie().trailer;
      movieInfoWrapperScope.poster = movieProvider.getSelectedMovie().poster;
      movieInfoWrapperScope.plot = movieProvider.getSelectedMovie().plot;
      movieInfoWrapperScope.elenco = movieProvider.getSelectedMovie().elenco;
      movieInfoWrapperScope.ano = movieProvider.getSelectedMovie().ano;
      movieInfoWrapperScope.nome = movieProvider.getSelectedMovie().nome;
    }
  });

  /*para actualizar o poster tenho de procurar no google $scope.$watch */
}
