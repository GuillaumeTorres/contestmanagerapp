'use strict';

module.exports = angular.module('myApp.mission', [])


.controller('MissionCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

	var test = $scope.test;
	var test2 = $scope.test2;
	console.log('MissionCtrl :)');	
	console.log('test : ');
	if(test) console.log($scope.test);
	else {
		console.log('blblblbl');

		$scope.test = false;

		console.log($scope.test);
	}

	console.log('test2 : ');
	if(test2) console.log($scope.test2);
	else {
		console.log('blblblbl');

		$scope.test2 = false;

		console.log($scope.test2);
	}
})