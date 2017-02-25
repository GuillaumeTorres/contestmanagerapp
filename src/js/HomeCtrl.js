'use strict';

module.exports = angular.module('myApp.main', [])

.controller('HomeCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicSideMenuDelegate) {

  // window.localStorage.clear();
  $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

  var user = JSON.parse(window.localStorage.getItem('user'));
  var isArbitre = JSON.parse(window.localStorage.getItem('isArbitre'));
  $scope.isArbitre = false;
  if (isArbitre) $scope.isArbitre = true;
})