'use strict';

angular.module('angularAdminlte', ['ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router',
    'ui.footable',
    'angularAdminlteModules'
])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(false);
    });
