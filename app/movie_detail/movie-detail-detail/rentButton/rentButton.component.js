'use strict'

angular.module('movie_detail')
  .component('rentButton', {
    templateUrl: 'movie_detail/movie-detail-detail/rentButton/rentButton.tpl.html',
    controller: 'rentButtonController',
    controllerAs: 'rentButtonScope'
  })
  .controller('rentButtonController', rentButtonFunction)

rentButtonFunction.$inject = ['$scope', 'movieProvider','rentalService'];

function rentButtonFunction($scope, movieProvider,rentalService) {
  var rentButtonScope = this;
  rentButtonScope.rentIndicator = movieProvider.getSelectedMovie().rented;

rentButtonScope.addRental = function addRental()
{
  rentalService.pushToCart();
  movieProvider.getSelectedMovie().rented = true;
}

rentButtonScope.removeRental = function removeRental()
{
  rentalService.removeFromCart();
  movieProvider.getSelectedMovie().rented = false;
}

  $scope.$watch(function() {
    return movieProvider.getSelectedMovie().rented
  }, changeButton)

  function changeButton(newValue, oldValue) {
    if (newValue !== oldValue) {
      rentButtonScope.rentIndicator = newValue;
    }



  }







}
