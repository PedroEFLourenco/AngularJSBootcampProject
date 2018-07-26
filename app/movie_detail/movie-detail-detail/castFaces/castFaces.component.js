'use strict'

angular.module('movie_detail')
.component('castFaces',
{
  templateUrl: 'movie_detail/movie-detail-detail/castfaces/castFaces.tpl.html',
  controller: 'castFacesController',
  controllerAs: 'castFacesScope'
})
.controller('castFacesController',castFacesFunction);

function castFacesFunction()
{
  var castFacesScope = this
}
