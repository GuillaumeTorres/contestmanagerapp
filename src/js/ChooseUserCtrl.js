'use strict';

module.exports = angular.module('myApp.chooseUser', [])

.controller('ChooseUserCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup) {

	console.log('ChooseUserCtrl :)');



	function getPassword() {

		console.log('getPassword');
		var password = 'arbitre'

		return password;

	}


    $scope.isArbitre = function (id) {
    	if(id == 1) {
	        window.localStorage.removeItem('isArbitre');
	        window.localStorage.setItem( 'isArbitre', false);
	        $state.go('login');
    	}
    	else if(id == 2) {	

       		var isArbitre = JSON.parse(window.localStorage.getItem('isArbitre'));
       		if(isArbitre){
		        window.localStorage.removeItem('isArbitre');
		        window.localStorage.setItem( 'isArbitre', true);

		        console.log(' isArbitre');
	        	$state.go('arbitre.main');
       		}
       		else{

       			$scope.donnees = {};
	    		var myPopup = $ionicPopup.show({
				template: '<input type="password" ng-model="donnees.password">',
				title: 'Entrer le mot de pass',
				scope: $scope,
				buttons: [
				  { text: 'Cancel' },
				  {
				    text: '<b>Save</b>',
				    type: 'button-positive',
				    onTap: function(e) {
				      if ($scope.donnees.password == getPassword()) {
				      	return true;
				      } else {
				      	return false;
				      }
				    }
				  }
				]
				});



				myPopup.then(function(res) {
					console.log('Tapped!', res);

					if(res){				

				        window.localStorage.removeItem('isArbitre');
				        window.localStorage.setItem( 'isArbitre', true);

				        console.log(' isArbitre');
			        	$state.go('arbitre.main');

					}
					else{
					 	var alertPopup = $ionicPopup.alert({
							title: 'Le mot de passe est incorect',
							template: 'veuillez réessayer'
					   	});

					   	alertPopup.then(function(res) {
					     	console.log('Merci');
					   	});

					}
					
				});
       		}
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