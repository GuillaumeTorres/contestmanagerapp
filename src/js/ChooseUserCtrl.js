'use strict';

module.exports = angular.module('myApp.chooseUser', [])

.controller('ChooseUserCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup) {

	console.log('ChooseUserCtrl :)');

    $scope.isArbitre = function (id) {
    	if(id == 1) {
	        window.localStorage.removeItem('isArbitre');
	        window.localStorage.setItem( 'isArbitre', false);
	        $state.go('login');
    	}
    	else if(id == 2) {	
	        window.localStorage.removeItem('isArbitre');
	        window.localStorage.setItem( 'isArbitre', true);
	        $state.go('arbitre.main');
    	}
    	else if(id == 3){
	        window.localStorage.removeItem('isArbitre');
	        window.localStorage.setItem( 'isArbitre', false);
	        $state.go('arbitre.searchTeam');
    	}
    	else {

    	}

    }
})