
'use strict';
// Ionic myApp

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'myApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//
angular.module('myApp', [
      'ionic',
      'ui.router',
      'ngAnimate',
      require('./HomeCtrl.js').name,
      require('./MatchCtrl.js').name,
      require('./MissionCtrl.js').name,
      require('./ProfilCtrl.js').name,
      require('./ScoresCtrl.js').name,
      require('./LoginCtrl.js').name,
      require('./TeamCtrl.js').name,
      require('./MainCtrl.js').name,
      require('./ArbitreCtrl.js').name,
      require('./HomeArbitreCtrl.js').name,
      require('./SearchTeamCtrl.js').name,
      require('./ChooseUserCtrl.js').name,
      require('./MissionArbitreCtrl.js').name,
      require('./MissionScoresCtrl.js').name,

      ])

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


.filter('secondsToHHmmss', function($filter) {
    return function(seconds) {
        return $filter('date')(new Date(0, 0, 0).setSeconds(seconds), 'mm:ss');
    };
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

.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, send to /
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('chooseUser', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'templates/chooseUser.html',
                            controller: 'ChooseUserCtrl',
                            controllerAs: 'chooseUser'
                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    views: {
                        'content': {
                            templateUrl: 'templates/login.html',
                            controller: 'LoginCtrl',
                            controllerAs: 'connection'
                        }
                    }
                })
                .state('arbitre', {
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: 'templates/homeArbitre.html',
                            controller: 'HomeArbitreCtrl',
                            controllerAs: 'homeArbitre'
                        }
                    }
                })
                .state('arbitre.main', {
                    url: '/arbitre',
                    templateUrl: 'templates/arbitre.html',
                    controller: 'ArbitreCtrl',
                    controllerAs: 'arbitre'
                })
                .state('arbitre.mission', {
                    url: '/arbitre/mission',
                    templateUrl: 'templates/missionArbitre.html',
                    controller: 'MissionArbitreCtrl',
                    controllerAs: 'missionArbitres'
                })
                .state('arbitre.searchTeam', {
                    url: '/searchTeam',
                    templateUrl: 'templates/searchTeam.html',
                    controller: 'SearchTeamCtrl',
                    controllerAs: 'searchTeam'
                })
                .state('home', {
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: 'templates/home.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'main'
                        }
                    }
                })
                .state('home.main', {
                    url: '/home',
                    templateUrl: 'templates/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'home'
                })
                .state('home.match', {
                    url: '/match',
                    templateUrl: 'templates/match.html',
                    controller: 'MatchCtrl',
                    controllerAs: 'match'
                })
                .state('home.scores', {
                    url: '/scores',
                    templateUrl: 'templates/scores.html',
                    controller: 'ScoresCtrl',
                    controllerAs: 'scores'
                })
                .state('home.profil', {
                    url: '/profil',
                    templateUrl: 'templates/profil.html',
                    controller: 'ProfilCtrl',
                    controllerAs: 'profil'
                })
                .state('home.mission', {
                    url: '/mission/',
                    templateUrl: 'templates/mission.html',
                    controller: 'MissionCtrl',
                    controllerAs: 'mission'
                })
                .state('home.missionScores', {
                    url: '/mission/scores',
                    templateUrl: 'templates/missionScores.html',
                    controller: 'MissionScoresCtrl',
                    controllerAs: 'missionScores'
                })
                .state('home.team', {
                    url: '/team/:id',
                    templateUrl: 'templates/team.html',
                    controller: 'TeamCtrl',
                    controllerAs: 'team'
                })
        }
    ])

/*
.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, send to /
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'templates/login.html',
                            controller: 'LoginCtrl',
                            controllerAs: 'connection'
                        }
                    }
                })
                .state('home', {
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: 'templates/home.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'main'
                        }
                    }
                })
                .state('home.main', {
                    url: '/home',
                    templateUrl: 'templates/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'home'
                })
                .state('home.match', {
                    url: '/match',
                    templateUrl: 'templates/match.html',
                    controller: 'MatchCtrl',
                    controllerAs: 'match'
                })
                .state('home.scores', {
                    url: 'templates/scores.html',
                    controller: 'ScoresCtrl',
                    controllerAs: 'scores'
                })
                .state('home.profil', {
                    url: '/profil',
                    templateUrl: 'templates/profil.html',
                    controller: 'ProfilCtrl',
                    controllerAs: 'profil'
                })
                .state('home.mission', {
                    url: '/mission',
                    templateUrl: 'templates/mission.html',
                    controller: 'MissionCtrl',
                    controllerAs: 'mission'
                })
                .state('home.team', {
                    url: '/team/:id',
                    templateUrl: 'templates/login.html',
                    controller: 'TeamCtrl',
                    controllerAs: 'team'
                })
        }
    ])*/

/*

'use strict';
// Ionic myApp

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'myApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//
angular.module('myApp', [
      'ionic',
      'ui.router',
      'ngAnimate',
      require('./HomeCtrl.js').name,
      require('./MatchCtrl.js').name,
      require('./MissionCtrl.js').name,
      require('./ProfilCtrl.js').name,
      require('./ScoresCtrl.js').name,

      ])

.run(['$rootScope', 'headerFactory', 'sideMenuProvider', 'localStorageService', '$state', 'MobileDetect', 'pushNotificationService', 'config',
        function ($rootScope, headerFactory, sideMenuProvider, localStorageService, $state, MobileDetect, pushNotificationService, config) {

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
}])


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


.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, send to /
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'templates/login.html',
                            controller: 'LoginCtrl',
                            controllerAs: 'connection'
                        }
                    }
                })
                .state('home', {
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: 'templates/home.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'main'
                        }
                    }
                })
                .state('home.match', {
                    url: '/match',
                    templateUrl: 'templates/match.html',
                    controller: 'MatchCtrl',
                    controllerAs: 'match'
                })
                .state('home.scores', {
                    url: 'templates/scores.html',
                    controller: 'ScoresCtrl',
                    controllerAs: 'scores'
                })
                .state('home.profil', {
                    url: '/profil',
                    templateUrl: 'templates/profil.html',
                    controller: 'ProfilCtrl',
                    controllerAs: 'profil'
                })
                .state('home.mission', {
                    url: '/mission',
                    templateUrl: 'templates/mission.html',
                    controller: 'MissionCtrl',
                    controllerAs: 'mission'
                })
                .state('home.team', {
                    url: '/team/:id',
                    templateUrl: 'templates/login.html',
                    controller: 'TeamCtrl',
                    controllerAs: 'team'
                })
        }
    ])

*/