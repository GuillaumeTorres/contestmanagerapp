'use strict';

module.exports = angular.module('myApp.searchTeam', [])

.controller('SearchTeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup, GlobalVar, myService) {

    console.log('SearchTeamCtrl :)');

    init();

    var urlApi = GlobalVar.urlApi;   

    function init() {

        console.log('Init');
        $scope.showGroup = false;
        $scope.showTeam = false;
        $scope.showLoad = true;
        $scope.titlePage = 'Choissisez une classe';

        myService.async("matchs/groups").then(function(d) {

            console.log('Reel donnees : ');
            var donnees = d;
            console.log('donnees');
            console.log(donnees);
            $scope.card = donnees;  
            $scope.showLoad = false;
            $scope.showGroup = true; 
        });
    }

    $scope.selectGroup = function (group) {
        console.log('SelectGroup');
        var idGroup = group.id;
        var urlGroupId = 'groups/' + idGroup +  '/match';

        $scope.showLoad = true;
        $scope.showGroup = false;

        myService.async(urlGroupId).then(function(d) {;
            console.log('Reel donnees selectGroup : ');
            var donnees = d[0];
            var team = donnees.team;
            console.log('team selectGroup : ');
            console.log(team);
            $scope.card = team;  
            $scope.showLoad = false;
            $scope.showTeam = true; 
            $scope.titlePage = 'Choissisez une équipe';
        });

        var type = 3;
        console.log('idGroup : ');
        console.log(idGroup);
        /*window.localStorage.removeItem('team');
        window.localStorage.setItem( 'team', JSON.stringify(team));
        window.localStorage.removeItem('type');
        window.localStorage.setItem( 'type', type);
        $state.go('home.main');*/
    }

    $scope.selectTeam = function (team) {
        console.log('SelectTeam');
        console.log('team : ');
        console.log(team);
        var type = 3;
        var team = team;
        window.localStorage.removeItem('team');
        window.localStorage.setItem( 'team', JSON.stringify(team));
        window.localStorage.removeItem('type');
        window.localStorage.setItem( 'type', type);
        $state.go('home.main');
    }

    $scope.reset = function () {  
        init();
    }
        
        var isArbitre = window.localStorage.getItem('isArbitre');

        console.log('isArbitre : ');
        console.log(isArbitre);
})