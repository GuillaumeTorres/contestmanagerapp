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
		
})