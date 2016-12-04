'use strict';

module.exports = angular.module('myApp.mission', [])


.controller('MissionCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

	var test = $scope.test;
	console.log('MissionCtrl :)');	
	console.log('test : ');
	if(test) console.log($scope.test);
	else {
		console.log('blblblbl');

		$scope.test = false;

		console.log($scope.test);
	}

})