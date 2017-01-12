'use strict';

module.exports = angular.module('myApp.mission', [])


.controller('MissionCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup, $timeout) {

	var data = init();

	$scope.data = init();

		console.log('data : ');
		console.log(data);

	function init() {

	    var data = {
			rangeM3 : 10,
			rangeM3Max: 10,
			totalScore: 0,
		    scoreM1: 0,
		    scoreM2: 0,
		    scoreM3: 0,
		    scoreM4: 0,
		    scoreM5: 0,
		    scoreM6: 0,
		    boolM1: false,
		    bonus: 0,
		    boolM1: 0,
		    scoreM2Check: 0,
		    scoreM1m1: 0,
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
			penalite: 0,
			rangeM3m1: 10,
			rangeM3m2: 10,
			rangeM3m3: 10,
			rangeM3m4: 10,
			rangeM3m5: 10,
			rangeM3m6: 10,
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
			score2M3m4 : 0,
			scoreM4T1: 0,
			scoreM4T2: 0,
			boolM4m1T1: false,
			boolM4m2T1: false,
			boolM4m3T1: false,
			boolM4m1T2: false,
			boolM4m2T2: false,
			boolM4m3T2: false,
			scoreM4T1m1: 0,
			scoreM4T1m2: 0,
			scoreM4T1m3: 0,
			scoreM4T2m1: 0,
			scoreM4T2m2: 0,
			scoreM4T2m3: 0,
			whereMusic: 0,
			music: 0,
			robot: 0,
			boolM5: false,
			boolM6: 0,
			bonus1: 0,
			bonus2: 0,
			bonus3: 0,
			bonus4: 0,
			showRange1M2:false,
			choice: 0,
			numberM2m1: 0,
			numberM2m2: 0,
			numberM2m3: 0,
			numberM2m4: 0,
			numberM2m5: 0,
			number2M3m1: 0,
			number2M3m2: 0,
			number2M3m3: 0,
			number1M3m1: 0,
			number1M3m2: 0,
			number1M3m3: 0
		}

		return data;

		console.log('Init');
	}

	$scope.btnReset = function() {
    
		var data = init();

		$scope.data = init();

		console.log('Reset');
	}

	$scope.initVarInData = function(e) {
		data.push(e);

		console.log('Reset');
		console.log(e);
	}

	$scope.btnSave = function() {

		console.log('Save');

		$scope.donnees = {};

		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
		template: '<input type="text" ng-model="donnees.nomTeam">',
		title: 'Entrer le nom de la fiche de score',
		scope: $scope,
		buttons: [
		  { text: 'Cancel' },
		  {
		    text: '<b>Save</b>',
		    type: 'button-positive',
		    onTap: function(e) {
		      if (!$scope.donnees.nomTeam) {
		        e.preventDefault();
		      } else {
		        return $scope.donnees.nomTeam;
		      }
		    }
		  }
		]
		});

		myPopup.then(function(res) {
			console.log('Tapped!', res);
			if(res){
				var tousLesScores = JSON.parse(window.localStorage.getItem('score'));

		        if (!tousLesScores) { 
		        	console.log('aucun score présent en base.');
		        	tousLesScores = [];
		        }
		        else console.log('Il y a des scores dans la base');

					
		        var newScore = {
					'Team' : res,
					'ScoreTotal' : $scope.data.totalScore,
					'ScoreM1' : $scope.data.scoreM1,
					'ScoreM2' : $scope.data.scoreM2,
					'ScoreM3' : $scope.data.scoreM3,
					'ScoreM4' : $scope.data.scoreM4,
					'ScoreM5' : $scope.data.scoreM5,
					'ScoreM6' : $scope.data.scoreM6,
					'Bonus' : $scope.data.bonus,
					'Time' : $scope.timer
				};
				


		        tousLesScores.push(newScore);

		        console.log(' scores : ');
		        console.log(tousLesScores);

		        window.localStorage.setItem( 'score', JSON.stringify(tousLesScores));


			 	var alertPopup = $ionicPopup.alert({
					title: 'Le fiche de score ' + res + ' a bien été enregistré',
					template: 'Score : ' + $scope.data.totalScore
			   	});

			   	alertPopup.then(function(res) {
        			$state.go('home.missionScores');
			   	});
			}
			else{
			 	var alertPopup = $ionicPopup.alert({
					title: 'Le score n\'a pas été enregistré',
					template: 'Il manque le nom de la fiche de score'
			   	});

			   	alertPopup.then(function(res) {
			     	console.log('Merci');
			   	});

			}
			
		});


		if (!$scope.donnees.nomTeam) {
	        
      	} 
      	else {
	      	
      	}
        
	}

	$scope.btnScore = function() {

		console.log('Score');
        $state.go('home.missionScores');
	}

	$scope.getArray = function(num) {
	    return new Array(num);   
	}

	$scope.boolM1Click = function(bool) {
		console.log('bool : ' + bool);
		if(bool) data.scoreM1m1 = 20;
		else data.scoreM1m1 = 0;

		$scope.data.scoreM1m1 = data.scoreM1m1;
	}

	$scope.rangeMission2 = function(id) {
    	console.log('range value has changed');
	    console.log('id : ');
	    console.log(id);
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


		$scope.data.numberM2m1 = range1;
		$scope.data.numberM2m2 = range2;
		$scope.data.numberM2m3 = range3;
		$scope.data.numberM2m4 = range4;
		$scope.data.numberM2m5 = range5;

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

		var total = range1 + range2 + range3 + range4 + range5;

		if(total == 4) {
			$('.rangeM2').removeClass('rangeGood');
			$('.rangeM2').addClass('rangeNotGood');
		}
		else if(total < 4 && total >= 0){
			$('.rangeM2').removeClass('rangeNotGood');
			$('.rangeM2').addClass('rangeGood');
		}
		else{
			$('.rangeM2').removeClass('rangeGood');
			$('.rangeM2').addClass('rangeNotGood');
		}

  	}


	$scope.rangeMission3 = function(statut) {



		if(statut){
			console.log('True range change');
	    	var range1 = parseInt($scope.data.range2M3m1);
	    	var range2 = parseInt($scope.data.range2M3m2);
	    	var range3 = parseInt($scope.data.range2M3m3);

			$scope.data.number2M3m1 = range1;
	    	$scope.data.number2M3m2 = range2;
	    	$scope.data.number2M3m3 = range3;


			$scope.data.score2M3m1 = 6 * range1;
	    	$scope.data.score2M3m2 = 8 * range2;
	    	$scope.data.score2M3m3 = 10 * range3;


	    	var nextRange1 = data.rangeM3Max - (range2 + range3);
	    	var nextRange2 = data.rangeM3Max - (range1 + range3);
	    	var nextRange3 = data.rangeM3Max - (range1 + range2);


	    	$scope.data.rangeM3m4 = nextRange1;
			$scope.data.rangeM3m5 = nextRange2;
			$scope.data.rangeM3m6 = nextRange3;
	    	
		}
		else {
			console.log('False range change');
	    	var range1 = parseInt($scope.data.range1M3m1);
	    	var range2 = parseInt($scope.data.range1M3m2);
	    	var range3 = parseInt($scope.data.range1M3m3);
	    	
			$scope.data.number1M3m1 = range1;
	    	$scope.data.number1M3m2 = range2;
	    	$scope.data.number1M3m3 = range3;
	    	
			$scope.data.score1M3m1 = 1 * range1;
	    	$scope.data.score1M3m2 = 2 * range2;
	    	$scope.data.score1M3m3 = 3 * range3;


	    	var nextRange1 = data.rangeM3Max - (range2 + range3);
	    	var nextRange2 = data.rangeM3Max - (range1 + range3);
	    	var nextRange3 = data.rangeM3Max - (range1 + range2);

	    	console.log('nextRange1 : ');
	    	console.log(nextRange1);
	    	console.log('nextRange2 : ');
	    	console.log(nextRange2);
	    	console.log('nextRange3 : ');
	    	console.log(nextRange3);

	    	$scope.data.rangeM3m1 = nextRange1;
			$scope.data.rangeM3m2 = nextRange2;
			$scope.data.rangeM3m3 = nextRange3;	
		}


		var total = range1 + range2 + range3;

		if(total == 10) {
			$('.rangeM3').removeClass('rangeGood');
			$('.rangeM3').addClass('rangeNotGood');
		}
		else if(total < 10 && total >= 0){
			$('.rangeM3').removeClass('rangeNotGood');
			$('.rangeM3').addClass('rangeGood');
		}
		else{
			$('.rangeM3').removeClass('rangeGood');
			$('.rangeM3').addClass('rangeNotGood');
		}
  	}


	$scope.penalite = function(penalite) {

		penalite = parseInt($scope.data.penalite);
		$scope.data.penalite = penalite;
		console.log('pen : ');
		console.log(penalite);
		data.rangeM3Max = data.rangeM3 - penalite;
		console.log('data.rangeM3Max : ');
		console.log(data.rangeM3Max);
  	}

	$scope.resetM3 = function() {
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


  	$scope.boolM4Click = function(tableau) {
  		
  		if(tableau){
  			// Tableau 1
	  		console.log('Mission 4 T1');
	  		var bool1 = $scope.data.boolM4m1T1;
			var bool2 = $scope.data.boolM4m2T1;
			var bool3 = $scope.data.boolM4m3T1;


			if(bool1 && bool2){
				$scope.data.scoreM4T1m1 = 15;
				$scope.data.scoreM4T1m2 = 15;
			}else{
				if(bool1) $scope.data.scoreM4T1m1 = 5;
				else $scope.data.scoreM4T1m1 = 0;
				if(bool2) $scope.data.scoreM4T1m2 = 5;
				else $scope.data.scoreM4T1m2 = 0;
			}

			if(bool3) $scope.data.scoreM4T1m3 = 20; 
			else $scope.data.scoreM4T1m3 = 0; 
  		}
  		else{
  			// Tableau 2
  			console.log('Mission 4 T2');
	  		var bool4 = $scope.data.boolM4m1T2;
			var bool5 = $scope.data.boolM4m2T2;
			var bool6 = $scope.data.boolM4m3T2;

			if(bool4 && bool5){
				$scope.data.scoreM4T2m1 = 15;
				$scope.data.scoreM4T2m2 = 15;
			}else{
				if(bool4) $scope.data.scoreM4T2m1 = 5;
				else $scope.data.scoreM4T2m1 = 0;
				if(bool5) $scope.data.scoreM4T2m2 = 5;
				else $scope.data.scoreM4T2m2 = 0;
			}

			if(bool6) $scope.data.scoreM4T2m3 = 20;
			else $scope.data.scoreM4T2m3 = 0;
  		}
  	}


  	$scope.boolM5Click = function(musique) {
  		console.log('musique : ');
  		console.log(musique);
  		if(!musique){
	  		$scope.data.whereMusic = 0;
	  		$scope.data.music = 0;
	  		$scope.data.scoreM5 = 0;
  		}
  	}


  	$scope.radioM5 = function(bool) {
  		console.log('bool : ');
  		console.log(bool);
  		var whereMusic = $scope.data.whereMusic;
  		var music = $scope.data.music;

  		if(music == 1 && whereMusic == 1){
  			$scope.data.scoreM5 = 30;
  		}
  		else if(music == 2 && whereMusic == 1){
			$scope.data.scoreM5 = 60;
  		}
  		else if(music == 2 && whereMusic == 2){
			$scope.data.scoreM5 = 50;
  		}
  		else if(music == 3 && whereMusic == 1){
			$scope.data.scoreM5 = 100;
  		}
  		else if(music == 3 && whereMusic == 2){
			$scope.data.scoreM5 = 80;
  		}
  		else{
			$scope.data.scoreM5 = 0;
  		}
  	}

  	$scope.radioM6 = function() {
  		var robot = $scope.data.robot;

  		if(robot == 1){
  			$scope.data.scoreM6 = 50;
  		}
  		else if(robot == 2){
  			if($scope.data.boolM6) $scope.data.scoreM6 = 100;
  			else $scope.data.scoreM6 = 80;
  		}else{
			$scope.data.scoreM6 = 0;
  		}
  	}


	$scope.boolBonus = function(bool) {
		console.log('bonus : ');
		var bonus1 = 30;
		var bonus2 = 30;
		var bonus3 = 20;
		var bonus4 = 20;
		var noBonus = 0;

		if($scope.data.boolBonus1) $scope.data.bonus1 = bonus1;
		else $scope.data.bonus1 = noBonus;

		if($scope.data.boolBonus2) $scope.data.bonus2 = bonus2;
		else $scope.data.bonus2 = noBonus;

		if($scope.data.boolBonus3) $scope.data.bonus3 = bonus3;
		else $scope.data.bonus3 = noBonus;

		if($scope.data.boolBonus4) $scope.data.bonus4 = bonus4;
		else $scope.data.bonus4 = noBonus;
	}



/*
	 var secondes = 0; 
	  var minutes = 0; 
	  var timerID = 0;
	  var on = false; 
	  var reset = false; 
	  
	  $("#play").click(function(){ 
	    Start(); 
	  }); 
	  $("#pause").click(function(){ 
	    Stop(); 
	  }); 
	  $("#reset").click(function(){ 
	    Reset(); 
	  }); 
	  
	  function chrono(){ 
	    secondes += 1; 
	    
	    if(secondes>59){ 
	      minutes += 1; 
	      secondes = 0; 
	    } 
	    
	    if(minutes<10 && secondes<10){ 
	      	$scope.data.timer = "0"+minutes+" : 0"+secondes;
	    } 
	    else if(minutes<10 && secondes>=10){ 
	     	$scope.data.timer = "0"+minutes+" : "+secondes;
	    } 
	    else if(minutes>=10 && secondes<10){ 
	      	$scope.data.timer = minutes+" : 0"+secondes;
	    } 
	    else if(minutes>=10 && secondes>10){ 
	      	$scope.data.timer = minutes+" : "+secondes;
	    } 
	  } 
	  
	  function Start(){ 
	    if(on===false){ 
	      timerID = setInterval(chrono, 1000); 
	      on = true; 
	      reset = false; 
	    } 
	  } 
	  
	  function Stop(){ 
	    if(on===true){ 
	      on = false; 
	      clearTimeout(timerID); 
	    } 
	  } 
	  
	  function Reset(){ 
	    if(reset===false) 
	    { 
	      clearInterval(timerID); 
	      secondes = 0; 
	      minutes = 0; 
	      $scope.data.timer = "00 : 00"; 
	      reset = true; 
	    } 
	  } */


	$scope.counter = 180;
	$scope.timer = 0;
	var clickPause = false;
	var clickPause2 = false;
	var mytimeout = null; // the current timeoutID
	var mytimeout2 = null; // the current timeoutID
	// actual timer method, counts down every second, stops on zero
	$scope.onTimeout = function() {
	    if($scope.counter ===  0) {
	        $scope.$broadcast('timer-stopped', 0);
	        $timeout.cancel(mytimeout);
	        return;
	    }
	    $scope.counter--;
	    mytimeout = $timeout($scope.onTimeout, 1000);
	};
	$scope.startCounter = function() {
		if(!clickPause2) {
			clickPause2 = true;
			mytimeout = $timeout($scope.onTimeout, 1000);
		}
	};
	// stops and resets the current timer
	$scope.stopCounter = function() {

		if(clickPause2) {
			clickPause2 = false;
		    $scope.$broadcast('timer-stopped', $scope.counter);
		    $timeout.cancel(mytimeout);
		}
	};
	// stops and resets the current timer
	$scope.resetCounter = function() {
	    $scope.$broadcast('timer-stopped', $scope.counter);
		clickPause2 = false;
	    $scope.counter = 180;
	    $timeout.cancel(mytimeout);
	};
	// triggered, when the timer stops, you can do something here, maybe show a visual indicator or vibrate the device
	$scope.$on('timer-stopped', function(event, remaining) {
	    if(remaining === 0) {
	        console.log('your time ran out!');

		 	var alertPopup = $ionicPopup.alert({
				title: 'Temps écoulé',
				template: 'Le compte à rebours est terminé'
		   	});

		   	alertPopup.then(function() {
		     	console.log('Merci');
		   	});

		   	$timeout(function() {
			 	alertPopup.close(); //close the popup after 3 seconds for some reason

			}, 5000);
	    }
	});

	$scope.onTime = function() {
	    $scope.timer++;
	    mytimeout2 = $timeout($scope.onTime, 1000);
	};

	$scope.startTimer = function() {
		if(!clickPause) {
			clickPause = true;
			mytimeout2 = $timeout($scope.onTime, 1000);
		}
	};
	// stops and resets the current timer
	$scope.stopTimer = function() {
		if(clickPause) {
			clickPause = false;
			$timeout.cancel(mytimeout2);
		}
	};
	// stops and resets the current timer
	$scope.resetTimer = function() {
		clickPause = false;
	    $scope.timer = 0;
	    $timeout.cancel(mytimeout2);
	};

})