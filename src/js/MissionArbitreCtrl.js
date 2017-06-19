'use strict';

module.exports = angular.module('myApp.missionArbitres', [])


.controller('MissionArbitreCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {

	console.log('MissionArbitreCtrl :)');	


    var teamArbitre = JSON.parse(window.localStorage.getItem('teamArbitre'));

    console.log('teamArbitre : ');
    console.log(teamArbitre);
    var name = teamArbitre.name;
    $scope.name = name;

})