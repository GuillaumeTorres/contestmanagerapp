'use strict';

module.exports = angular.module('myApp.profil', [])

.controller('ProfilCtrl', function ($scope, $ionicPopover, $http) {
  
  console.log('ProfilCtrl :)');

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