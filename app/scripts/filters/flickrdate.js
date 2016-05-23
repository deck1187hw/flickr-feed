'use strict';

/**
 * @ngdoc filter
 * @name flickrFeedApp.filter:flickrDate
 * @function
 * @description
 * # flickrDate
 * Filter in the flickrFeedApp.
 */
angular.module('flickrFeedApp')
  .filter('flickrDate', function () {
    return function (input) {
      return input;
    };
  });
