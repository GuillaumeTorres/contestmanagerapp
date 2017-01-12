'use strict';

module.exports = angular.module('myApp.match', [])

.controller('MatchCtrl', function ($scope, $ionicPopover, $http) {

  $scope.onSwipeLeft = function () {
      console.log('message');
  };
  $scope.lol = true;

  $scope.finished = function (finished){
    if(finished) return true;
    else return false;
  };

  var team = JSON.parse(window.localStorage.getItem('team'));
  var id = team.id;
  console.log('team');
  console.log(team);
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
