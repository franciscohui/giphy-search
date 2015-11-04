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
    $scope.searchTerm = 'cat';
    $scope.giphyData = [];

    $scope.search = function () {
      var url = 'http://api.giphy.com/v1/gifs/search?q=' + $scope.searchTerm + '&api_key=dc6zaTOxFJmzC';
      $http.get(url).then(function (response) {
        $scope.giphyData = response.data;
      }, function () {
      });
    };
  });

/**

 when form is submitted,
 replace search variable with the new text input
 call $http get method
 use parameter inside search query
 **/
