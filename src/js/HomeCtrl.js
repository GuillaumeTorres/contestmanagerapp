'use strict';

module.exports = angular.module('myApp.main', [])

.controller('HomeCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  var user = JSON.parse(window.localStorage.getItem('user'));
  var type = user.type;
  console.log(type);
  if(type == 3) {
    $scope.team = true;
    $scope.id = user.id_team;
  }else{
    $scope.team = false;
  } 
  console.log($scope.team)
})