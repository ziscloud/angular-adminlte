'use strict';

angular.module('lead', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.lead', {
                url: '/lead',
                templateUrl: 'modules/lead/lead.html',
                controller: 'LeadCtrl',
                parent: 'main'
            })
            .state('main.lead.new', {
                url: '/lead/new',
                templateUrl: 'modules/lead/lead_new.html',
                controller: 'LeadNewCtrl',
                parent: 'main'
            })
            .state('main.lead.detail', {
                url: '/lead/:id',
                templateUrl: 'modules/lead/lead_detail.html',
                controller: 'LeadDetailCtrl',
                parent: 'main'
            });
    })
    .controller('LeadCtrl', function($scope) {

    })
    .controller('LeadNewCtrl', function($scope) {

    })
    .controller('LeadDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    });
