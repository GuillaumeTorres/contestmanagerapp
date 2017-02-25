'use strict';

module.exports = angular.module('myApp.arbitre', [])

.controller('ArbitreCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup, GlobalVar, myService) {
	
	console.log('ArbitreCtrl :)');	
    
	init();

    var urlApi = GlobalVar.urlApi;   
    $scope.showRest = false;

    function init() {

        console.log('Init');
        $scope.showError = false;  
        $scope.showGroup = false;
        $scope.showTeam = false;
        $scope.showLoad = true;
        $scope.showMatch = false; 
        $scope.waitPopup = false;
        $scope.titlePage = 'Choissisez une classe';

        myService.async("matchs/groups").then(function(d) {

            console.log('Reel donnees : ');
            var donnees = d.data;
            console.log('donnees');
            console.log(donnees);
            if(d.status == 200){
                $scope.groups = donnees;  
                $scope.showLoad = false;
                $scope.showGroup = true; 
                $scope.showMatch = false; 
                $scope.rotate = false;
                $scope.showRest = true;
            }else{
                popupError();
            }
        });
    }


    function getPassword() {

        console.log('getPassword');
        var password = 'arbitre'

        return password;

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

        $scope.showLoad = true;
        $scope.showGroup = false;

        myService.async(urlGroupId).then(function(d) {;
            console.log('Reel donnees selectGroup : ');
            var donnees = d.data[0];
            var team = donnees.team;
            console.log('team selectGroup : ');
            console.log(team);
            if(d.status == 200){
                $scope.teams = team;  
                $scope.showLoad = false;
                $scope.showRest = false;
                $scope.showTeam = true; 
                $scope.showMatch = false; 
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
            console.log('selectTeam : ');
        var urlGroupId = 'matchs/team/' + team.id;

        var type = 3;
        window.localStorage.removeItem('team');
        window.localStorage.setItem( 'team', JSON.stringify(team));
        window.localStorage.removeItem('type');
        window.localStorage.setItem( 'type', type);

        console.log('urlGroupId : ');
        console.log(urlGroupId);
        $scope.showLoad = true;
        $scope.showGroup = false;
        $scope.showTeam = false;
        $scope.showMatch = false;


        myService.async(urlGroupId).then(function(d) {;
            console.log('Reel donnees selectTeam : ');
            var matchs = d.data;
            console.log('match Team : ');
            console.log(d);
            if(d.status == 404) {
                console.log('Aucun match n\'a été trouvé');
                $scope.showError = true;    
            }
            else if(d.status == 200) {
                console.log('Match trouvé');
                $scope.matchs = matchs;  
                $scope.showMatch = true; 
            }
            else {
                popupError();
            }
            $scope.showLoad = false;
            $scope.titlePage = 'Choissisez un match';
        });


/*        console.log('SelectTeam');
        console.log('team : ');
        console.log(team);
        var type = 3;
        var team = team;
        window.localStorage.removeItem('team');
        window.localStorage.setItem( 'team', JSON.stringify(team));
        window.localStorage.removeItem('type');
        window.localStorage.setItem( 'type', type);
        $state.go('arbitre.mission');
*/
    }

    $scope.selectMatch = function (match) {
        console.log('SelectMatch');
        console.log('matchs : ');
        console.log(match);
        console.log('match id: ');
        console.log(match.id);
        console.log('match score: ');
        console.log(match.score);
        console.log('match versus.finished: ');
        console.log(match.versus.finished);
        $scope.data = {};
        if (match.score === undefined) {

            console.log('Match sans score');
            window.localStorage.removeItem('matchScored');
            window.localStorage.setItem( 'matchScored', match.versus.id);
            window.localStorage.removeItem('modifScore');
            window.localStorage.setItem( 'modifScore', false);
            $state.go('arbitre.mission');
        }
        else {
            console.log('Match avec un score');
            window.localStorage.removeItem('modifScore');
            window.localStorage.setItem( 'modifScore', true);
            var team = JSON.parse(window.localStorage.getItem('team'));
            var nameTeam = team.name;
            var myPopup = $ionicPopup.show({
                template: '<input type="number" ng-model="data.newScore" placeholder="Entrer le nouveau score"> <br/><input type="password" ng-model="data.password" placeholder="Entrer le mot de passe"> ',
                title: 'Modification du score <br/> Equipe : ' + nameTeam,
                subTitle: 'Ancien score : ' + match.score,
                scope: $scope,
                buttons: [
                  { text: 'Cancel' },
                  {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                      if ($scope.data.newScore && $scope.data.password == getPassword()) {
                            console.log('yes $scope.data.newScore : ');
                            console.log($scope.data.newScore);
                            console.log('yes $scope.data.password : ');
                            console.log($scope.data.password);
                            var donnees = {
                                newScore:$scope.data.newScore
                            }
                            return donnees;
                      } else {
                            console.log('nonono : $scope.data.newScore');
                            console.log($scope.data.newScore);  
                      }
                    }
                  }
                ]
              });



            myPopup.then(function(res) {
                console.log('Tapped!', res);

                if(res){
                    $scope.waitPopup = true;


                    var id_match = 0;
                    var id_team = 0;
                    var score = res.newScore;

                    var team = JSON.parse(window.localStorage.getItem('team'));
                    var id_team = team.id;
                    var id_match = match.versus.id;
                    
                    var urlSendScore = 'matchs/team/score?id_match=' + id_match + '&id_team=' + id_team + '&score=' + score;

                    myService.asyncPost(urlSendScore).then(function(d) {
                        console.log('Reel donnees selectTeam : ');
                        console.log(d);
                        var matchs = d;
                        $scope.waitPopup = false;
                        if(d.status == 400) {
                            console.log('Problème lors du POST');

                            var alertPopup = $ionicPopup.alert({
                                title: 'Un problème a été enregistré',
                                template: 'Suite au problème les données n\'ont pas étaient enregistrées'
                            });

                            alertPopup.then(function(res) {
                                console.log('Merci');
                            });

                        }
                        else if(d.status == 404){
                            console.log('Problème lors du POST Match ou team non trouvé');

                            var alertPopup = $ionicPopup.alert({
                                title: 'La team ou le match n\'a pas été trouvé',
                                template: 'Suite au problème les données n\'ont pas étaient enregistrées'
                            });

                            alertPopup.then(function(res) {
                                console.log('Merci');
                            });
                        }
                        else if(d.status == 200) {
                            console.log('POST OK');
                            var whoScore = 'scoreArbitre';
                            var scoreArbitre = JSON.parse(window.localStorage.getItem('scoreArbitre'));
                            var team = JSON.parse(window.localStorage.getItem('team'));
                            var idTeam = team.id;
                            var idVersus = JSON.parse(window.localStorage.getItem('matchScored'));


                            angular.forEach(scoreArbitre, function(score) {

                                if(score.idTeam == idTeam && score.idVersus == idVersus) {
                                    score.ScoreTotal = $scope.data.newScore;
                                    score.ScoreChang = 'Le score total a été modifié le détaille des points sont donc incorecte';
                                }
                            });

                            console.log(' scoreArbitre : ');
                            console.log(scoreArbitre);

                            window.localStorage.setItem( whoScore, JSON.stringify(scoreArbitre));


                            var alertPopup = $ionicPopup.alert({
                                title: 'Le fiche de score de l\'équipe ' + team.name + ' a bien été enregistré',
                                template: 'Score : ' + $scope.data.newScore
                            });
                        }
                        else {
                            
                            console.log('Problème lors du POST');

                            var alertPopup = $ionicPopup.alert({
                                title: 'Un problème a été enregistré',
                                template: 'Suite au problème les données n\'ont pas étaient enregistrées'
                            });

                            alertPopup.then(function(res) {
                                console.log('Merci');
                            });
                        }
                        
                    }); 
                }
                else{
                    var alertPopup = $ionicPopup.alert({
                        title: 'Le score n\'a pas été enregistré',
                        template: 'Le mot de passe est incorect'
                    });

                    alertPopup.then(function(res) {
                        console.log('Merci');
                    });

                }
                
            });
        }
    }

    $scope.reset = function () {  
        init();
    }

    $scope.searchAgain = function() {
      $scope.rotate = true;
      init();
    }

    $scope.finished = function (finish) {  
        console.log('finish : ');
        console.log(finish);
        if (finish) $scope.finish = true; 
        else $scope.finish = false;
    }
})