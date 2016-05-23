'use strict';

/**
 * @ngdoc service
 * @name flickrFeedApp.flickrService
 * @description
 * # flickrService
 * Service in the flickrFeedApp.
 */
angular.module('flickrFeedApp')
  .service('flickrService', function ($http,localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function



        var config = {
          flickrApi: 'https://api.flickr.com/services/',
          callback: 'JSON_CALLBACK',
          user: 'potato'
        };


      this.storeData = function(val){
          localStorageService.set('flickrPhotos', val);
      };

      this.getPhoto = function(idx){
          var photos = localStorageService.get('flickrPhotos');
          console.log(photos[idx]);
          return photos[idx];
      };

    /*
     Gets all the list from flickr
     */
    this.getFeedData = function() {
        var that = this;
      var promise = $http.jsonp(config.flickrApi + 'feeds/photos_public.gne?tags='+config.user+'&tagmode=all&format=json&jsoncallback='+config.callback)
        .success(function(res){

            // Update our local storage
            that.storeData(res.items);

            // Return the new feed to the controller
            return res;
        });
        return promise;
    };






  });
