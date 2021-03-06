// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','firebase','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/pages/menu/index.html",
    controller: 'AppController'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/search/index.html"
      }
    }
  })

  .state('app.gallery', {
    url: "/gallery",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/gallery/index.html",
        controller: 'GalleryController'
      }
    }
  })

  .state('app.addit', {
    url: "/addit",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/addit/index.html",
        controller: 'AddItController'
      }
    }
  })

  .state('app.edit', {
    url: "/addit/edit",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/addit/editphotos.html",
        controller: 'EditPicsController'
      }
    }
  })
  .state('app.submitted', {
    url: "/addit/edit/submitted",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/addit/editphotos.html",
        controller: 'EditPicsController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
