'use strict';

/**
 * @ngdoc overview
 * @name flickrFeedApp
 * @description
 * # flickrFeedApp
 *
 * Main module of the application.
 */
angular
  .module('flickrFeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/photo/:photoId', {
        templateUrl: 'views/photo.html',
        controller: 'FlickrphotoCtrl',
        controllerAs: 'photo'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('flickrFeed');
    });
