'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'ngResource',
  'myApp.final',
  'myApp.cost',
  'myApp.preferences',
  'myApp.survey',
  'myApp.nomadService'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/survey', {
      templateUrl: 'survey/survey.html',
      controller: 'SurveyCtrl'
    });

    $routeProvider.when('/preferences', {
      templateUrl: 'preferences/preferences.html',
      controller: 'PreferencesCtrl'
    });

    $routeProvider.when('/cost', {
      templateUrl: 'cost/cost.html',
      controller: 'CostCtrl'
    });

    $routeProvider.when('/final', {
      templateUrl: 'final/final.html',
      controller: 'FinalCtrl'
    });

    $routeProvider.otherwise({ redirectTo: '/survey' });
  }]);
