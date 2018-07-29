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

  movieInfoWrapperScope.videoURL = movieProvider.getMovieDB()[0].trailer; /*Porque é que o getSelectedMovie aqui não funciona??*/
  movieInfoWrapperScope.poster = movieProvider.getMovieDB()[0].poster; /*Porque é que o getSelectedMovie aqui não funciona??*/
  movieInfoWrapperScope.plot = movieProvider.getMovieDB()[0].plot;
  movieInfoWrapperScope.elenco = movieProvider.getMovieDB()[0].elenco;
  movieInfoWrapperScope.ano = movieProvider.getMovieDB()[0].ano;
    movieInfoWrapperScope.nome = movieProvider.getMovieDB()[0].nome;





  $scope.$watch(function(){ return movieProvider.getSelectedMovie()}, function changeMovieInfo(newMovie, oldMovie) {
    console.log('tou no watch ' + movieProvider.getSelectedMovieIndex());

    if (newMovie !== oldMovie)
    {
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
