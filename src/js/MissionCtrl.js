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
			rangeM3 : 10,
			penalite: 15
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
	    scoreM2m1: 0,
	    scoreM2m2: 0,
	    scoreM2m3: 0,
	    scoreM2m4: 0,
	    scoreM2m5: 0,
	    range1: 4,
		range2: 4,
		range3: 4,
		range4: 4,
		range5: 4,
		multiM2m1: 0,
		multiM2m2: 0,
		multiM2m3: 0,
		multiM2m4: 0,
		multiM2m5: 0,
		penalite: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		rangeM3: 10,
		range1M3m1 : 0,
		range1M3m2 : 0,
		range1M3m3 : 0,
		range2M3m1 : 0,
		range2M3m2 : 0,
		range2M3m3 : 0,
		range2M3m4 : 0,
		score1M3m1 : 0,
		score1M3m2 : 0,
		score1M3m3 : 0,
		score2M3m1 : 0,
		score2M3m2 : 0,
		score2M3m3 : 0,
		score2M3m4 : 0
	}

	$scope.getArray = function(num) {
	    return new Array(num);   
	}

	console.log('MissionCtrl :)');	
	console.log('boolM1 : ');
	console.log(data.penalite);

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
    	var range1 = parseInt($scope.data.multiM2m1);
    	var range2 = parseInt($scope.data.multiM2m2);
    	var range3 = parseInt($scope.data.multiM2m3);
    	var range4 = parseInt($scope.data.multiM2m4);
    	var range5 = parseInt($scope.data.multiM2m5);

    	var nextRange1 = 4 - (range2 + range3 + range4 + range5);
    	var nextRange2 = 4 - (range1 + range3 + range4 + range5);
    	var nextRange3 = 4 - (range1 + range2 + range4 + range5);
    	var nextRange4 = 4 - (range1 + range2 + range3 + range5);
    	var nextRange5 = 4 - (range1 + range2 + range3 + range4);


    	$scope.data.scoreM2m1 = 1 * range1;
    	$scope.data.scoreM2m2 = 2 * range2;
    	$scope.data.scoreM2m3 = 10 * range3;
    	$scope.data.scoreM2m4 = 15 * range4;
    	$scope.data.scoreM2m5 = 25 * range5;

    	$scope.data.range1 = nextRange1;
		$scope.data.range2 = nextRange2;
		$scope.data.range3 = nextRange3;
		$scope.data.range4 = nextRange4;
		$scope.data.range5 = nextRange5;

  	}


	$scope.rangeMission3 = function(statut) {
		if(statut){
			console.log('True range change');
			$scope.data.score2M3m1 = 5 * $scope.data.range2M3m1;
	    	$scope.data.score2M3m2 = 6 * $scope.data.range2M3m2;
	    	$scope.data.score2M3m3 = 8 * $scope.data.range2M3m3;
	    	$scope.data.score2M3m4 = 10 * $scope.data.range2M3m4;
	    	
		}
		else {
			console.log('False range change');
			$scope.data.score1M3m1 = 1 * $scope.data.range1M3m1;
	    	$scope.data.score1M3m2 = 2 * $scope.data.range1M3m2;
	    	$scope.data.score1M3m3 = 3 * $scope.data.range1M3m3;
	    	
		}
  	}


	$scope.penalite = function(penalite) {
		$scope.data.rangeM3 = data.rangeM3 - penalite;
  	}

	$scope.resetM3 = function(penalite) {
		$scope.data.score1M3m1 = 0;
    	$scope.data.score1M3m2 = 0;
    	$scope.data.score1M3m3 = 0;
		$scope.data.score2M3m1 = 0;
    	$scope.data.score2M3m2 = 0;
    	$scope.data.score2M3m3 = 0;
    	$scope.data.score2M3m4 = 0;
		$scope.data.range2M3m1 = 0;
    	$scope.data.range2M3m2 = 0;
    	$scope.data.range2M3m3 = 0;
		$scope.data.range2M3m4 = 0;
    	$scope.data.range1M3m1 = 0;
    	$scope.data.range1M3m2 = 0;
    	$scope.data.range1M3m3 = 0;
  	}





 
})