

.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, send to /
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'templates/login.html',
                            controller: 'LoginCtrl',
                            controllerAs: 'connection'
                        }
                    }
                })
                .state('home', {
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: 'templates/home.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'main'
                        }
                    }
                })
                .state('home.match', {
                    url: '/match',
                    templateUrl: 'templates/match.html',
                    controller: 'MatchCtrl',
                    controllerAs: 'match'
                })
                .state('home.scores', {
                    url: 'templates/scores.html',
                    controller: 'ScoresCtrl',
                    controllerAs: 'scores'
                })
                .state('home.profil', {
                    url: '/profil',
                    templateUrl: 'templates/profil.html',
                    controller: 'ProfilCtrl',
                    controllerAs: 'profil'
                })
                .state('home.mission', {
                    url: '/mission',
                    templateUrl: 'templates/mission.html',
                    controller: 'MissionCtrl',
                    controllerAs: 'mission'
                })
                .state('home.team', {
                    url: '/team/:id',
                    templateUrl: 'templates/login.html',
                    controller: 'TeamCtrl',
                    controllerAs: 'team'
                })
        }
    ])