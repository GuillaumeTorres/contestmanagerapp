'use strict';

module.exports = angular.module('myApp.missionScores', [])


.controller('MissionScoresCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup, $timeout) {

	console.log('MissionScoresCtrl');
	var scores = JSON.parse(window.localStorage.getItem('score'));

	$scope.donnees = scores;
	console.log('scores : ');
	console.log(scores);
	
	if(!scores || !scores[0]) {
		var alertPopup = $ionicPopup.alert({
				title: 'Aucun score n\'est enregistré' ,
				template: 'Vous serez redirigé vers la feuille de mission'
		   	});

	   	alertPopup.then(function(res) {
	     	console.log('Merci');
        	$state.go('home.mission');
	   	});
	}



	$scope.btnGoMission = function() {

		console.log('mission');
        $state.go('home.mission');
	}

	$scope.removeScore = function(id) {

		console.log('id : ');
		console.log(id);

		var confirmPopup = $ionicPopup.confirm({
			title: 'Suppression d\'un score',
			template: 'Attention vous allez supprimer ce score'
		});

		confirmPopup.then(function(res) {
			if(res) {
				var tousLesScores = JSON.parse(window.localStorage.getItem('score'));

				tousLesScores.splice(id, 1);


		        window.localStorage.setItem( 'score', JSON.stringify(tousLesScores));

		        $('#score' + id).hide();	
			} 

			if(!tousLesScores || !tousLesScores[0]) {
				var alertPopup = $ionicPopup.alert({
						title: 'Aucun score n\'est enregistré' ,
						template: 'Vous serez redirigé vers la feuille de mission'
				   	});

			   	alertPopup.then(function(res) {
			     	console.log('Merci');
		        	$state.go('home.mission');
			   	});
			}
		});
		
	}
})