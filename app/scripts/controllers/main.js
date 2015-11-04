'use strict';

/**
 * @ngdoc function
 * @name giphySearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giphySearchApp
 */
angular.module('giphySearchApp')
  .controller('MainCtrl', function ($scope, $http) {
    // Looping through Giphy searches
  var searchTerm = 'cat';
  console.log(searchTerm);
  var newSearch = function(searchTerm){
    searchTerm = searchTerm;
    console.log(searchTerm);
    searchGiphy(searchTerm);
  }; //newSearch

  $scope.newSearch = newSearch;

  var searchGiphy = function(searchTerm){
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q='+ searchTerm + '&api_key=dc6zaTOxFJmzC'
      }).then(function successCallback(response) {
          $scope.giphyData = response.data;
          console.log($scope.giphyData);

        }, function errorCallback() {
        });
  }; //searchGiphy
});

/**

when form is submitted,
replace search variable with the new text input
call $http get method
use parameter inside search query
**/
