'use strict';

module.exports = angular.module('myApp.home', [])

.controller('MainCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicSideMenuDelegate) {

  var user = JSON.parse(window.localStorage.getItem('user'));
  var type = JSON.parse(window.localStorage.getItem('type'));
  var id = '';  

  console.log('type : ');
  console.log(type);
  if(type == 3) {
    $scope.team = true;
    var id_team = user.id_team;
    $scope.id = id_team;
    console.log('id_team : ' + id_team);
    console.log('Nom Team : ');
    console.log(user.name);
    name = user.name;
    $scope.nom = name; 

  }else{
    var name = user.first_name;  
    $scope.nom = name;
    $scope.team = false;
  } 
  console.log($scope.team)

  if(type == 3){
  }
  else{   
  }


})