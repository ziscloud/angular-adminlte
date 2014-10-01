'use strict';

angular.module('main', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                abstract: true,
                url: '/main',
                templateUrl: 'modules/main/main.html',
                controller: 'MainCtrl'
            });
    })
    .controller('MainCtrl', function($scope) {
        //TODO
        $scope.test = {};
    });
