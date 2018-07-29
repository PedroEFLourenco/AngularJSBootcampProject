'use strict'

angular.module('movie_detail')
.component('castFace',
{
  templateUrl: 'movie_detail/movie-detail-detail/castfaces/castFace.tpl.html',
  controller: 'castFaceController',
  controllerAs: 'castFaceScope',
  bindings:{
    nome: '@'
  }
})
.controller('castFaceController',castFaceFunction);

function castFaceFunction()
{
  var castFaceScope = this
}
