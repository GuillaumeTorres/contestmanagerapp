'use strict';

module.exports = angular.module('myApp.match', [])

.controller('MatchCtrl', function ($scope, $ionicPopover, $http, myService, GlobalVar) {

  $scope.showLoad = true;
  $scope.showMatch = false;

  $scope.onSwipeLeft = function () {
      console.log('message');
  };
  $scope.lol = true;

  var team = JSON.parse(window.localStorage.getItem('team'));
  var idTeam = team.id;
  console.log('team');
  console.log(team);
  console.log('id');
  console.log(idTeam);
  var urlMatch = 'matchs/team/' + idTeam;
  //window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));
  searchMatch();

  function searchMatch() {

    myService.async(urlMatch).then(function(d) {
      console.log('Reel donnees match : ');
      var donnees = d;
      console.log('donnees : ');
      console.log(donnees);

      angular.forEach(donnees, function(value) {
        var finished = value.versus.finished;

        if(finished) $scope.matchsFinish = donnees;
        else $scope.matchsNotFinish = donnees;

      });


      $scope.showLoad = false;
      $scope.rotate = false;
      $scope.showMatch = true;
    });
  }

  $scope.searchAgain = function() {
    $scope.rotate = true;
    searchMatch();
  }






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
