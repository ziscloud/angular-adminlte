'use strict';

angular.module('account', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.account', {
                url: '/account',
                templateUrl: 'modules/account/account.html',
                controller: 'AccountCtrl',
                parent: 'main'
            })
            .state('main.account.new', {
                url: '/account/new',
                templateUrl: 'modules/account/account_new.html',
                controller: 'AccountNewCtrl',
                parent: 'main'
            })
            .state('main.account.detail', {
                url: '/account/:id',
                templateUrl: 'modules/account/account_detail.html',
                controller: 'AccountDetailCtrl',
                parent: 'main'
            });
    })
    .controller('AccountCtrl', function($scope) {

    })
    .controller('AccountNewCtrl', function($scope) {

    })
    .controller('AccountDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    });
