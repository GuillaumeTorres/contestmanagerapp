'use strict';

module.exports = angular.module('myApp.arbitre', [])

.controller('ArbitreCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicSideMenuDelegate, $ionicPopup, $ionicLoading) {
	
	console.log('ArbitreCtrl :)');	

	$scope.show = false;
    $http.get("team.json")                                            
    .success(function(data, status, headers, config) {
        var donnees = data;
        console.log('donnees');
        console.log(donnees);
        $scope.card = donnees;  
		$scope.show = true;            
     });

    $scope.selectTeam = function (team) {
        console.log('ouiiiiiiiiiiiiiii');  

        console.log('team : ');
        console.log(team);
        var team = team;

        window.localStorage.removeItem('teamArbitre');
        window.localStorage.setItem( 'teamArbitre', JSON.stringify(team));
        window.localStorage.removeItem('type');
        window.localStorage.setItem( 'type', 3);
        $state.go('arbitre.mission');

    }

        var isArbitre = window.localStorage.getItem('isArbitre');

        console.log('isArbitre : ');
        console.log(isArbitre);

		
})