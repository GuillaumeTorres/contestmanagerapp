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

.controller('IndexCtrl', function($scope, $ionicPopup, $state, $http) {
    $scope.menu = false;
    $scope.data = {};
    $scope.lol = false;

    $http.get("users.json")                                            
    .success(function(data, status, headers, config) {
        var donnees = data;
        var co = false;
        $scope.login = function() {
          var i = 0;
          var user = $scope.data.username;
          var password = $scope.data.password;
          while(donnees[i] != undefined){
            if(user == donnees[i].username && password == donnees[i].password) {
              var co = true;
              window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));
            }
            i++;
          }

          if(co) {
            console.log('oui')
            console.log(window.localStorage);
            var user = JSON.parse(window.localStorage.getItem('user'));
            var type = user.type;
            console.log(type)
            if(type == 3) {
              $scope.team = true;
              $scope.id = user.id_team;
            }else{
              $scope.team = false;
            } 
            console.log($scope.team)
            $scope.lol = true;
            $state.go('home');
          } else {
            console.log('non')
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
          }
        }                                
     }); 

    // $http({
    //   method: 'GET',
    //   url: 'donnees'
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //     var donnees = response.data;
    //     var co = false;
    //     console.log(donnees);
    //     $scope.login = function() {
    //       var i = 0;
    //       var user = $scope.data.username;
    //       var password = $scope.data.password;
    //       while(donnees[i] != undefined){
    //         if(user == 'user' && password == 'test') var co = true;
    //         i++;
    //       }

    //       if(co) {
    //         console.log('oui')
    //         $state.go('home');
    //         $scope.lol = true;
    //       } else {
    //         console.log('non')
    //         var alertPopup = $ionicPopup.alert({
    //             title: 'Login failed!',
    //             template: 'Please check your credentials!'
    //         });
    //       }
    //     }
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //     console.log('TrucMachin');
    //   });
 
    
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
      console.log('message');
  };
  $scope.lol = true;

  $scope.finished = function (finished){
    if(finished) return true;
    else return false;
  };

  var user = JSON.parse(window.localStorage.getItem('user'));
  var id = user.id_team;
  console.log('user');
  console.log(user);
  console.log('id');
  console.log(id);
  //window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));

  $http.get("matchs.json")                                            
  .success(function(data, status, headers, config) {
      var donnees = data;
      console.log('donnees');
      console.log(donnees);
      var matchs = [];
      var i = 0;
      while(donnees[i] != undefined){
        if(id == donnees[i].team1.id || id == donnees[i].team2.id) {
          console.log('Bon match : ');
          console.log(donnees[i]);
          matchs.push(donnees[i]);
          // window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));
        }
        i++;
      }
      $scope.match = matchs;                       
   }); 





  // // Simple GET request example:
  // $http({
  //   method: 'GET',
  //   url: 'http://contestmanager.dev/api/matchs/team/' + id
  // }).then(function successCallback(response) {
  //     // this callback will be called asynchronously
  //     // when the response is available
  //     // 
  //     console.log(response.data);
  //     $scope.match = response.data;
  //   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //     console.log('TrucMachin');
  //   }); 
})

.controller('ProfilCtrl', function ($scope, $ionicPopover, $http) {

  $scope.lol = true;
  



  // Simple GET request example:
  // $http({
  //   method: 'GET',
  //   url: 'http://contestmanager.dev/api/users'
  // }).then(function successCallback(response) {
  //     // this callback will be called asynchronously
  //     // when the response is available*
  //     console.log('trucMuche');
  //     var data = response.data[3];
  //     if(data.roles[0] == "ROLE_ADMIN"){
  //       $scope.role = 0;
  //     }
  //     else if(data.team != 'undefined'){
  //       $scope.role = 2;
  //     } 
  //     else {
  //       $scope.role = 1;     
  //     }

  //     $scope.user = data;
  //     //$scope.user = response.data[3];
  //   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //     console.log('TrucMachin');
  //   }); 
})

.controller('TeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

  console.log('Id = ' + $stateParams.id);
  var id = $stateParams.id;
  $scope.lol = true;

  $http.get("team.json")                                            
  .success(function(data, status, headers, config) {
      var donnees = data;
      console.log('donnees');
      console.log(donnees);
      var team = [];
      var i = 0;
      while(donnees[i] != undefined){
        if(id == donnees[i].id) {
          console.log('Bonne Team : ');
          console.log(donnees[i]);
          team.push(donnees[i]);
          // window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));
        }
        i++;
      }
      console.log('Variable team : ');
      console.log(team[0]);
      $scope.team = team[0];                    
   });



  // Simple GET request example:
  // $http({
  //   method: 'GET',
  //   url: 'http://contestmanager.dev/api/teams/' + id
  // }).then(function successCallback(response) {
  //     // this callback will be called asynchronously
  //     // when the response is available*
  //     console.log('trucMuche');
  //     console.log(response.data);
  //     var data = response.data;

  //     $scope.team = data;
  //     //$scope.user = response.data[3];
  //   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //     console.log('TrucMachin');
  //   });
})

.controller('HomeCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

  var user = JSON.parse(window.localStorage.getItem('user'));
  var type = user.type;
  console.log(type)
  if(type == 3) {
    $scope.team = true;
    $scope.id = user.id_team;
  }else{
    $scope.team = false;
  } 
  console.log($scope.team)
})


.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('home', {
    url:'/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
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

  $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  $urlRouterProvider.otherwise('')
});
