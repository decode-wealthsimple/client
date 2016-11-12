'use strict';

angular.module('myApp.survey', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/survey', {
      templateUrl: 'survey/survey.html',
      controller: 'SurveyCtrl'
    });
  }])

  .controller('SurveyCtrl', ['$scope', 'nomadService', function ($scope, nomadService) {
    $scope.origin = "";
    $scope.destination = "";
    $scope.cities = [];
    nomadService.getCities().$promise.then((cities) => {
      $scope.cities = cities;
      console.log(JSON.stringify(cities));
    }, (error) => {
      console.log(JSON.stringify(error));
    });
  }]);