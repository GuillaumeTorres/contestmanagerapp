'use strict';

module.exports = angular.module('myApp.scores', [])


.controller('ScoresCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup, $timeout, GlobalVar, myService) {
	
 	console.log('ScoresCtrl :)');

    var team = JSON.parse(window.localStorage.getItem('team'));
    var idTeam = team.id;
  	var urlTournaments = 'tournaments';

	console.log('urlTournaments : ');
	console.log(urlTournaments);
	$scope.showLoad = true;
	$scope.showGroup = false;
	$scope.showTeam = false;
	$scope.showMatch = false;


	myService.async(urlTournaments).then(function(d) {;
	    console.log('Reel donnees selectTeam : ');
	    var tournaments = d.data;
	    console.log('match Team : ');
	    console.log(d);
	    if(d.status == 404) {
	        console.log('Aucun match n\'a été trouvé');
	        $scope.showError = true;    
	    }
	    else if(d.status == 200) {
	        console.log('Match trouvé');
	        console.log('tournaments : ');
	        console.log(tournaments);

	        angular.forEach(tournaments, function(tournament) {
		        
	        	console.log('--------------------------------------');
		        var matchs = tournament.match;

		        angular.forEach(matchs, function(match) {
			        console.log('match : ');
			        console.log(match);

			    });

		    });






	        //$scope.matchs = matchs;  
	        $scope.showMatch = true; 
	    }
	    else {
	        popupError();
	    }
	    $scope.showLoad = false;
	    $scope.titlePage = 'Choissisez un match';
	});

})