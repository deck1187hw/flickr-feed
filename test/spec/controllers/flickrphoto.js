'use strict';

describe('Controller: FlickrphotoCtrl', function () {

  // load the controller's module
  beforeEach(module('flickrFeedApp'));

  var FlickrphotoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlickrphotoCtrl = $controller('FlickrphotoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlickrphotoCtrl.awesomeThings.length).toBe(3);
  });
});
