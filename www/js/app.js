// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MatchCtrl', function ($scope, $ionicPopover) {
  

  $scope.onSwipeLeft = function () {
      alert('message');
    };
    
  $scope.articles = {
    items:[{
              "_id": "1",
              "team_1": "Myers",
              "team_2": "Leblanc",
              "date": "2016-01-08 01:38:09",
              "table": 13
            },
            {
              "_id": "2",
              "team_1": "Mcdaniel",
              "team_2": "Knight",
              "date": "2014-10-08 04:02:00",
              "table": 15
            },
            {
              "_id": "3",
              "team_1": "Rowe",
              "team_2": "Osborne",
              "date": "2015-12-19 10:21:57",
              "table": 7
            },
            {
              "_id": "4",
              "team_1": "Mcfarland",
              "team_2": "Chan",
              "date": "2014-01-10 11:09:27",
              "table": 11
            },
            {
              "_id": "5",
              "team_1": "Shepard",
              "team_2": "Humphrey",
              "date": "2015-01-28 05:49:40",
              "table": 15
            },
            {
              "_id": "6",
              "team_1": "William",
              "team_2": "Bonner",
              "date": "2015-03-29 06:11:34",
              "table": 11
            },
            {
              "_id": "7",
              "team_1": "SQDFSDF",
              "team_2": "Chan",
              "date": "2014-01-10 11:09:27",
              "table": 11
            },
            {
              "_id": "8",
              "team_1": "fqofiqsodf",
              "team_2": "Humphrey",
              "date": "2015-01-28 05:49:40",
              "table": 15
            },
            {
              "_id": "9",
              "team_1": "qsdssdescs",
              "team_2": "Bonner",
              "date": "2015-03-29 06:11:34",
              "table": 11
            },
            {
              "_id": "10",
              "team_1": "Bond",
              "team_2": "Valdez",
              "date": "2014-12-24 07:05:15",
              "table": 4
            }],
            select: function(article){
              // Le template a passé un paramètre, la variable article correspond à l'article sur lequel on a cliqué
              console.log(article);
            }
  };

})



.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('home', {
    url:'/home',
    templateUrl: 'templates/home.html'
  })

  $stateProvider.state('match', {
    url:'/match',
    templateUrl: 'templates/match.html',
    controller: 'MatchCtrl'
  })

  $stateProvider.state('scores', {
    url:'/scores',
    templateUrl: 'templates/scores.html'
  })

  $stateProvider.state('profile', {
    url:'/profile',
    templateUrl: 'templates/profile.html'
  })

  $stateProvider.state('mission', {
    url:'/mission',
    templateUrl: 'templates/mission.html'
  })

  $urlRouterProvider.otherwise('/home')
});
