'use strict'

angular.module('movie_detail')
.component('rentButton',
{
  templateUrl:'movie_detail/movie-detail-detail/rentButton/rentButton.tpl.html',
  controler: 'rentButtonController',
  controllerAs: 'rentButtonScope'
})
.controller('rentButtonController',rentButtonFunction)

function rentButtonFunction()
{
  var rentButtonScope = this;
}
