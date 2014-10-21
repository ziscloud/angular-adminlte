'use strict';

angular.module('contract', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.contract', {
                url: '/contract',
                templateUrl: 'modules/contract/contract.html',
                controller: 'ContractCtrl',
                parent: 'main'
            })
            .state('main.contract.new', {
                url: '/contract/new',
                templateUrl: 'modules/contract/contract_new.html',
                controller: 'ContractNewCtrl',
                parent: 'main'
            })
            .state('main.contract.detail', {
                url: '/contract/:id',
                templateUrl: 'modules/contract/contract_detail.html',
                controller: 'ContractDetailCtrl',
                parent: 'main'
            });
    })
    .controller('ContractCtrl', function($scope) {

    })
    .controller('ContractNewCtrl', function($scope) {

    })
    .controller('ContractDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    });
