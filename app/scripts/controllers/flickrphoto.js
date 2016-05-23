'use strict';

/**
 * @ngdoc function
 * @name flickrFeedApp.controller:FlickrphotoCtrl
 * @description
 * # FlickrphotoCtrl
 * Controller of the flickrFeedApp
 */


angular.module('flickrFeedApp')
    .controller('FlickrphotoCtrl',['$scope', 'flickrService', '$routeParams',  function ($scope, flickrService,$routeParams) {

        $scope.photoFlickr = null;
        $scope.tags = [];


        $scope.getTags = function(tags){
            var res = [];
            if(tags !== ''){
                res = tags.split(' ');
                return res;
            }
        };

        var getPhoto = function (idx) {
            $scope.photoFlickr = flickrService.getPhoto(idx);
            $scope.tags = $scope.getTags($scope.photoFlickr.tags);
        };


        getPhoto($routeParams.photoId);





    }]);
