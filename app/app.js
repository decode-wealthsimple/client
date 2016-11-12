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
  'myApp.nomadService',
  'myApp.preferences1'
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
    $routeProvider.when('/preferences1', {
    	templateUrl: 'preferences/preferences1.html',
    	controller: 'PreferencesCtrl'
    })

    $routeProvider.when('/cost', {
      templateUrl: 'preferences1/preferences1.html',
      controller: 'PreferencesCtrl1'
    });

    $routeProvider.when('/final', {
      templateUrl: 'final/final.html',
      controller: 'FinalCtrl'
    });

    $routeProvider.otherwise({ redirectTo: '/survey' });
  }])

  .directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
