'use strict';

describe('Filter: flickrDate', function () {

  // load the filter's module
  beforeEach(module('flickrFeedApp'));

  // initialize a new instance of the filter before each test
  var flickrDate;
  beforeEach(inject(function ($filter) {
    flickrDate = $filter('flickrDate');
  }));

  it('should return the input prefixed with "flickrDate filter:"', function () {
    var text = 'angularjs';
    expect(flickrDate(text)).toBe('flickrDate filter: ' + text);
  });

});
