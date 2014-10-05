'use strict';

angular.module('opportunity', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.opportunity', {
                url: '/opportunity',
                templateUrl: 'modules/opportunity/opportunity.html',
                controller: 'OpportunityCtrl',
                parent: 'main'
            })
            .state('main.opportunity.new', {
                url: '/opportunity/new',
                templateUrl: 'modules/opportunity/opportunity_new.html',
                controller: 'OpportunityNewCtrl',
                parent: 'main'
            })
            .state('main.opportunity.detail', {
                url: '/opportunity/:id',
                templateUrl: 'modules/opportunity/opportunity_detail.html',
                controller: 'OpportunityDetailCtrl',
                parent: 'main'
            });
    })
    .controller('OpportunityCtrl', function($scope) {

    })
    .controller('OpportunityNewCtrl', function($scope) {

    })
    .controller('OpportunityDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    });
