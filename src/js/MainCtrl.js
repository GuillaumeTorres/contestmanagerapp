'use strict';

module.exports = angular.module('myApp.home', [])

.controller('MainCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicSideMenuDelegate) {

  var user = JSON.parse(window.localStorage.getItem('user'));
  console.log('user :');
  console.log(user);
  var name = user.first_name;  
  var id = '';  


  if(user.type == 3){

    var id_team = user.id_team;
  console.log('id_team : ' + id_team);
    $http.get("team.json")                                            
    .success(function(data, status, headers, config) {
        var donnees = data;
        console.log('donnees');
        console.log(donnees);
        var i = 0;
        while(donnees[i] != undefined){
          if(id_team == donnees[i].id) {
            console.log('Nom Team : ');
            console.log(donnees[i].name);
            name = donnees[i].name;
            $scope.nom = name;    
          }
          i++;      
        }                 
     });

  }
  else{
    $scope.nom = name;   
  }


})