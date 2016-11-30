'use strict';

module.exports = angular.module('myApp.team', [])


.controller('TeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {
  
  console.log('TeamCtrl :)');

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