'use strict';

module.exports = angular.module('myApp.searchTeam', [])

.controller('SearchTeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup) {

    console.log('SearchTeamCtrl :)');

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
        console.log('team : ');
        console.log(team);
        var type = 3;
        window.localStorage.removeItem('user');
        window.localStorage.setItem( 'user', JSON.stringify(team));
        window.localStorage.setItem( 'type', 3);
        $state.go('home.main');
    }
        
})