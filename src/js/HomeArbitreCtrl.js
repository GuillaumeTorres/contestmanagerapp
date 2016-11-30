'use strict';

module.exports = angular.module('myApp.homeArbitre', [])

.controller('HomeArbitreCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicSideMenuDelegate, $ionicPopup) {
	
	console.log('HomeArbitreCtrl :)');	

  	$scope.toggleLeft = function() {
      	$ionicSideMenuDelegate.toggleLeft();
    };

})