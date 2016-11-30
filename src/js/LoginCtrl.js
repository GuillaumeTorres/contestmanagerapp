'use strict';

module.exports = angular.module('myApp.connection', [])





.controller('LoginCtrl', function ($scope, $ionicPopover, $http, $state, $stateParams, $ionicPopup) {

    $scope.menu = false;
    $scope.data = {};
    $scope.lol = false;

    $scope.login = function() {

        $http({
          method: 'GET',
          url: 'users.json'
        }).then(function successCallback(response) {
            var donnees = response.data;
            var i = 0;
            var co = false;
            var goHome = true;
            var user = [];
            var username = $scope.data.username;
            var password = $scope.data.password;
            while(donnees[i] != undefined){
                if(username == donnees[i].username && password == donnees[i].password) {
                    co = true;
                    user.push(donnees[i]);
                    user = user[0];
                    delete user.password;
                    window.localStorage.setItem( 'user', JSON.stringify(donnees[i]));
                }
                i++;
            }
            
            if(co) {
                console.log(window.localStorage);
                var user = JSON.parse(window.localStorage.getItem('user'));
                var type = user.type;
                console.log(type);
                var id = user.id;
                
                if(type == 1){
                    $scope.team = false;
                    $scope.id = id;
                }
                else if(type == 2){
                    $scope.team = false;
                    $scope.id = id;
                }
                else if(type == 3) {
                    $scope.team = true;
                    $scope.id = user.id_team;
                }else if(type == 4){
                    $scope.team = false;
                    $scope.id = id;
                }
                else{
                    goHome = false;
                } 

                if(goHome){
                    console.log($scope.team)
                    $scope.lol = true;
                    $state.go('home.main');
                }
            } else {
                console.log('non')
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            }
        }); 
    } 

    $scope.arbitre = function(test) {
        console.log('Arbitre Co');
        $state.go('arbitre.main');
    } 
})