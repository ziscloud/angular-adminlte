'use strict';

angular.module('campaign', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.campaign', {
                url: '/campaign',
                templateUrl: 'modules/campaign/campaign.html',
                controller: 'CampaignCtrl',
                parent: 'main'
            })
            .state('main.campaign.new', {
                url: '/campaign/new',
                templateUrl: 'modules/campaign/campaign_new.html',
                controller: 'CampaignNewCtrl',
                parent: 'main'
            })
            .state('main.campaign.detail', {
                url: '/campaign/:id',
                templateUrl: 'modules/campaign/campaign_detail.html',
                controller: 'CampaignDetailCtrl',
                parent: 'main'
            });
    })
    .controller('CampaignCtrl', function($scope) {

    })
    .controller('CampaignNewCtrl', function($scope) {

    })
    .controller('CampaignDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    });
