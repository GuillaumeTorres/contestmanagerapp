'use strict';

module.exports = angular.module('myApp.mission', [])


.controller('MissionCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {


	var score = 0;
	var scoreM1 = 0;
	var scoreM2 = 0;
	var scoreM3 = 0;
	var scoreM4 = 0;
	var scoreM5 = 0;
	var scoreM6 = 0;
	var boolM1 = 0;
	var scoreM2Check = 0;

	console.log('MissionCtrl :)');	
	console.log('boolM1 : ');

	$scope.boolM1Click = function(bool) {
		console.log('bool : ' + bool);
		if(bool) boolM1 = 20;
		else boolM1 = 0;

		$scope.scoreM1m1 = boolM1;
	}

	$scope.checkM2Click = function(check1, check2, check3, check4, check5) {
		var scoreCheck1 = 0;
		var scoreCheck2 = 0;
		var scoreCheck3 = 0;
		var scoreCheck4 = 0;
		var scoreCheck5 = 0;
		console.log('check1 : ' + check1);
		console.log('check2 : ' + check2);
		console.log('check3 : ' + check3);
		console.log('check4 : ' + check4);
		console.log('check5 : ' + check5);

		if(check1) scoreCheck1 = 20;
		if(check2) scoreCheck2 = 30;
		if(check3) scoreCheck3 = 40;
		if(check4) scoreCheck4 = 50;
		if(check5) scoreCheck5 = 60;

		$scope.scoreM2 = scoreCheck1 + scoreCheck2 + scoreCheck3 + scoreCheck4 + scoreCheck5;
	} 

	$scope.rangeMission2 = function() {
    	console.log('range value has changed');
  	}
  

	$scope.score = score;
	$scope.scoreM1m1 = scoreM1;
	$scope.choice = scoreM1;
	$scope.scoreM2 = scoreM2;
	$scope.scoreM2m1 = score;
	$scope.scoreM2m2 = score;
	$scope.scoreM2m3 = score;
	$scope.scoreM2m4 = score;
	$scope.scoreM2m5 = score;
	$scope.test = score;
})