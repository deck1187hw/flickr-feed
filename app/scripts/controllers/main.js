'use strict';

/**
 * @ngdoc function
 * @name flickrFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrFeedApp
 */
angular.module('flickrFeedApp')
  .controller('MainCtrl',['$scope', 'flickrService',  function ($scope, flickrService) {

    $scope.photos = null;

    $scope.getFeed = function () {

      flickrService.getFeedData()
          .then(function (result) {
            $scope.photos = result.data;
          });
    };
    $scope.getFeed();



  }]);


