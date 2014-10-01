'use strict';

angular.module('dashboard', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main.dashboard', {
                url: '/dashboard',
                templateUrl: 'modules/dashboard/dashboard.html',
                controller: 'DashboardCtrl'
            });

        $urlRouterProvider.when('/', '/main/dashboard');
    })
    .controller('DashboardCtrl', function($scope) {
        $scope.awesomeThings = [{
            'key': 'angular',
            'title': 'AngularJS',
            'url': 'https://angularjs.org/',
            'description': 'HTML enhanced for web apps!',
            'logo': 'angular.png'
        }, {
            'key': 'browsersync',
            'title': 'BrowserSync',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'browsersync.png'
        }, {
            'key': 'gulp',
            'title': 'GulpJS',
            'url': 'http://gulpjs.com/',
            'description': 'The streaming build system.',
            'logo': 'gulp.png'
        }, {
            'key': 'jasmine',
            'title': 'Jasmine',
            'url': 'http://jasmine.github.io/',
            'description': 'Behavior-Driven JavaScript.',
            'logo': 'jasmine.png'
        }, {
            'key': 'karma',
            'title': 'Karma',
            'url': 'http://karma-runner.github.io/',
            'description': 'Spectacular Test Runner for JavaScript.',
            'logo': 'karma.png'
        }, {
            'key': 'protractor',
            'title': 'Protractor',
            'url': 'https://github.com/angular/protractor',
            'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
            'logo': 'protractor.png'
        }, {
            'key': 'jquery',
            'title': 'jQuery',
            'url': 'http://jquery.com/',
            'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
            'logo': 'jquery.jpg'
        }, {
            'key': 'bootstrap',
            'title': 'Bootstrap',
            'url': 'http://getbootstrap.com/',
            'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
            'logo': 'bootstrap.png'
        }, {
            'key': 'less',
            'title': 'Less',
            'url': 'http://lesscss.org/',
            'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
            'logo': 'less.png'
        }];
        angular.forEach($scope.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });
    });
