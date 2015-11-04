'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('giphySearchApp'));

  var createController, scope, http;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    createController = function() {
      return $controller('MainCtrl', {
        $scope: scope
      });
    };
  }));

  it ('should have a default search term', function() {
    createController();
    expect(scope.searchTerm).toBe('cat');
  });

  it('should have a default for data', function() {
    createController();
    expect(scope.giphyData).toEqual([]);
  });

  it ('should search with the term', function() {
    var data = {foo: 'bar'};
    createController();
    http.expectGET('http://api.giphy.com/v1/gifs/search?q='+ scope.searchTerm + '&api_key=dc6zaTOxFJmzC')
      .respond(data);

    scope.search();
    http.flush();

    expect(scope.giphyData).toEqual(data);
  });

  afterEach(function() {
    http.verifyNoOutstandingExpectation();
    http.verifyNoOutstandingRequest();
  });
});
