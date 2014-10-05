'use strict';

angular.module('angularAdminlte', ['ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'mgcrea.ngStrap',
    'ui.router',
    'ui.footable',
    'ui.select',
    'adminlte.modules'
])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, uiSelectConfig) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(false);
        uiSelectConfig.theme = 'bootstrap';
    });
