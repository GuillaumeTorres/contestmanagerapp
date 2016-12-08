'use strict';

module.exports = angular.module('myApp.mission', [])


.controller('MissionCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

	var data = {
			score: 0,
		    scoreM2m1: 0,
		    scoreM1: 0,
		    scoreM2: 0,
		    scoreM3: 0,
		    scoreM4: 0,
		    scoreM5: 0,
		    scoreM6: 0,
		    boolM1: 0,
		    scoreM2Check: 0,
		    range: 4

		}
	$scope.data = {
		score: 0,
	    scoreM2m1: 0,
	    scoreM1: 0,
	    scoreM2: 0,
	    scoreM3: 0,
	    scoreM4: 0,
	    scoreM5: 0,
	    scoreM6: 0,
	    boolM1: 0,
	    scoreM2Check: 0,
	    range: 4
	}

	console.log('MissionCtrl :)');	
	console.log('boolM1 : ');

	$scope.boolM1Click = function(bool) {
		console.log('bool : ' + bool);
		if(bool) data.boolM1 = 20;
		else data.boolM1 = 0;

		$scope.data.scoreM1m1 = data.boolM1;
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

		$scope.data.scoreM2 = scoreCheck1 + scoreCheck2 + scoreCheck3 + scoreCheck4 + scoreCheck5;
	} 


	$scope.rangeMission2 = function() {
    	console.log('range value has changed');
    	var range1 = $scope.data.scoreM2m1;
    	var range2 = $scope.data.scoreM2m2;
    	var range3 = $scope.data.scoreM2m3;
    	var range4 = $scope.data.scoreM2m4;
    	var range5 = $scope.data.scoreM2m5;
    	console.log('range1 : ');
    	console.log(range1);
    	console.log('range2 : ');
    	console.log(range2);
    	console.log('range3 : ');
    	console.log(range3);
    	console.log('range4 : ');
    	console.log(range4);
    	console.log('range5 : ');
    	console.log(range5);
  	}
  

	$scope.data.score = 0;
	$scope.data.scoreM1m1 = 0;
	$scope.data.choice = 0;
	$scope.data.scoreM2 = 0;
	$scope.data.scoreM2m2 = 0;
	$scope.data.scoreM2m3 = 0;
	$scope.data.scoreM2m4 = 0;
	$scope.data.scoreM2m5 = 0;
	$scope.data.test = 0;
})