'use strict';

angular.module('customer', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.account', {
                url: '/account',
                templateUrl: 'modules/customer/account.html',
                controller: 'AccountCtrl',
                parent: 'main'
            })
            .state('main.account.new', {
                url: '/new',
                templateUrl: 'modules/customer/account_new.html',
                controller: 'AccountNewCtrl',
                parent: 'main'
            })
            .state('main.account.detail', {
                url: '/account/:id',
                templateUrl: 'modules/customer/account_detail.html',
                controller: 'AccountDetailCtrl',
                parent: 'main'
            })
            .state('main.contact', {
                url: '/contact',
                templateUrl: 'modules/customer/contact.html',
                controller: 'ContactCtrl'
            });
    })
    .controller('AccountCtrl', function($scope) {

    })
    .controller('AccountNewCtrl', function($scope) {

    })
    .controller('AccountDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    })
    .controller('ContactCtrl', function($scope) {

    });
