'use strict';

module.exports = angular.module('myApp.team', [])


.controller('TeamCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams) {
  
  console.log('TeamCtrl :)');
  $scope.lol = true;


  var team = JSON.parse(window.localStorage.getItem('team'));

  console.log('team : ');
  console.log(team);

  console.log('team.users : ');
  console.log(team.user);

  $scope.name = team.name;
  $scope.users = team.user;


/*
  $http.get("team.json")                                            
  .success(function(data, status, headers, config) {
      var donnees = data;
      console.log('donnees');
      console.log(donnees);
      var team = [];
      var i = 0;
      while(donnees[i] != undefined){
        if(id == donnees[i].id) {
          console.log('Bonne Team : ');
          console.log(donnees[i]);
          team.push(donnees[i]);
          // window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));
        }
        i++;
      }
      console.log('Variable team : ');
      console.log(team[0]);
      $scope.team = team[0];                    
   });*/
})