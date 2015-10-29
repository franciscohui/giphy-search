'use strict';

/**
 * @ngdoc overview
 * @name giphySearchApp
 * @description
 * # giphySearchApp
 *
 * Main module of the application.
 */
angular
  .module('giphySearchApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
