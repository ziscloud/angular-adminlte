'use strict';

angular.module('quote', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('main.quote', {
                url: '/quote',
                templateUrl: 'modules/quote/quote.html',
                controller: 'QuoteCtrl',
                parent: 'main'
            })
            .state('main.quote.new', {
                url: '/quote/new',
                templateUrl: 'modules/quote/quote_new.html',
                controller: 'QuoteNewCtrl',
                parent: 'main'
            })
            .state('main.quote.detail', {
                url: '/quote/:id',
                templateUrl: 'modules/quote/quote_detail.html',
                controller: 'QuoteDetailCtrl',
                parent: 'main'
            });
    })
    .controller('QuoteCtrl', function($scope) {

    })
    .controller('QuoteNewCtrl', function($scope) {

    })
    .controller('QuoteDetailCtrl', function($scope, $stateParams) {
        console.log($stateParams.id);
    });
