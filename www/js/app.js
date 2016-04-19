// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//
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

.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
})

.controller('MatchCtrl', function ($scope, $ionicPopover, $http) {

  $scope.onSwipeLeft = function () {
      alert('message');
    };
    
  function show() {
    console.log('show : ');
  }

  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://contestmanager.dev/api/matchs'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.users = response.data;
      console.log(response.data);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('TrucMachin');
    }); 
})

.controller('ProfilCtrl', function ($scope, $ionicPopover, $http) {

  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://contestmanager.dev/api/users'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available*
      console.log('trucMuche');
      var data = response.data[3];
      if(data.roles[0] == "ROLE_ADMIN"){
        $scope.role = 0;
      }
      else if(data.team != 'undefined'){
        $scope.role = 2;
      } 
      else {
        $scope.role = 1;     
      }

      $scope.user = data;
      //$scope.user = response.data[3];
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('TrucMachin');
    }); 
})

.controller('TeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

  console.log('Id = ' + $stateParams.id);
  var id = $stateParams.id;
  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://contestmanager.dev/api/teams/' + id
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available*
      console.log('trucMuche');
      console.log(response.data);
      var data = response.data;

      $scope.team = data;
      //$scope.user = response.data[3];
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('TrucMachin');
    });
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
    templateUrl: 'templates/profile.html',
    controller: 'ProfilCtrl'
  })

  $stateProvider.state('mission', {
    url:'/mission',
    templateUrl: 'templates/mission.html'
  })

  $stateProvider.state('team', {
    url:'/team/:id',
    templateUrl: 'templates/team.html',
    controller: 'TeamCtrl'
  })

  $urlRouterProvider.otherwise('/home')
});
