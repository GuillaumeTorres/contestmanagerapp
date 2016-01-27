'use strict';

var config  = require('../../package.json');
var angular = require('angular');

angular.module('myApp', [
  'ui.router',
  require('angular-ui-router'),
  require('angular-animate'),
  require('./common/ngTransition.module.js').name,
  require('./common/sideMenu.module.js').name,
  
  require('./demo/home.module.js').name,
])

.constant('DEFAULT', {
  'version' : config.version,
  'appName' : config.name
})


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
		// For any unmatched url, send to /
    	$urlRouterProvider.otherwise('/');
    	
	    $stateProvider
	    .state('app', {
	        abstract: true,
	        views: {
	        	'content': {
	        		templateUrl: 'modules/common/main.view.html',
	        	}
	        }
	     })
	    .state('app.home', {
	        url: '/',
    		templateUrl: 'modules/demo/home.view.html',
    		controller: 'HomeCtrl',
    		controllerAs: 'home'
	    })
	    .state('app.equipe', {
	        url: '/mon-equipe',
    		templateUrl: 'modules/demo/equipe.view.html',
	    })
	    .state('app.matchs', {
	        url: '/matchs',
    		templateUrl: 'modules/demo/matchs.view.html',
	    })
	    .state('app.scores', {
	        url: '/scores',
    		templateUrl: 'modules/demo/scores.view.html',
	    })
      .state('app.ficheDePoints', {
          url: '/ficheDePoints',
        templateUrl: 'modules/demo/ficheDePoints.view.html',
      });
    }
])

.run(['$rootScope', 'sideMenuProvider',
    function($rootScope, sideMenuProvider) {
  	    $rootScope.$on('$stateChangeStart', function () {
  	    	sideMenuProvider.close();
  	    });
  	}
]);