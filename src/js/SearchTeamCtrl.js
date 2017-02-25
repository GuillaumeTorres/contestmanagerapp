'use strict';

module.exports = angular.module('myApp.searchTeam', [])

.controller('SearchTeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup, GlobalVar, myService) {

    console.log('SearchTeamCtrl :)');

    init();

    var urlApi = GlobalVar.urlApi;
    $scope.showRest = false;


    function init() {

        console.log('Init');
        $scope.card = '';
        $scope.titlePage = 'Choissisez une classe';
        $scope.showGroup = false;
        $scope.showTeam = false;
        $scope.showLoad = true;

        myService.async("matchs/groups").then(function(d) {

            console.log('Reel donnees : ');
            console.log(d);
            var donnees = d.data;
            console.log('donnees');
            console.log(donnees);
            if(d.status == 200){
                $scope.card = donnees;
                $scope.showLoad = false;
                $scope.rotate = false;
                $scope.showRest = true;
                $scope.showGroup = true;    
            }else{
                popupError();
            }
            
        });
    }

    function popupError() {
        var alertPopup = $ionicPopup.alert({
            title: 'Un problème est survenu',
            template: 'Aucune données n\'a été trouvé'
        });

        alertPopup.then(function() {
            console.log('Merci');
            $state.go('chooseUser');
        });
    }

    $scope.selectGroup = function (group) {
        console.log('SelectGroup');
        var idGroup = group.id;
        var urlGroupId = 'groups/' + idGroup +  '/match';

        myService.async(urlGroupId).then(function(d) {
            console.log('Reel donnees selectGroup : ');
            console.log(d);
            var donnees = d.data[0];
            var team = donnees.team;
            console.log('team selectGroup : ');
            console.log(team);
            if(d.status == 200){
                $scope.card = team;
                $scope.showLoad = false;
                $scope.showRest = false;
                $scope.showGroup = false;
                $scope.showTeam = true;
                $scope.titlePage = 'Choissisez une équipe';
            }else{
                popupError();
            }
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
        window.localStorage.setItem( 'type', type);        $state.go('home.main');        $state.go('home.main');
    }

    $scope.reset = function () {
        init();
    }

    $scope.searchAgain = function() {
      $scope.rotate = true;
      init();
    }

    var isArbitre = window.localStorage.getItem('isArbitre');

    console.log('isArbitre : ');
    console.log(isArbitre);
})
