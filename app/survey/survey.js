'use strict';

angular.module('myApp.survey', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/survey', {
      templateUrl: 'survey/survey.html',
      controller: 'SurveyCtrl'
    });
  }])

  .controller('SurveyCtrl', ['$scope', '$location', 'nomadService', function ($scope, $location, nomadService) {
    $scope.origin = "";
    $scope.destination = "";
    $scope.cities = [];
    nomadService.getCities().$promise.then((cities) => {
      $scope.cities = cities;
      console.log(JSON.stringify(cities));
    }, (error) => {
      console.log(JSON.stringify(error));
    });
    $scope.go = function (path) {
      if ($scope.origin != "") {
        nomadService.passenger.origin = $scope.origin;
      }
      if ($scope.destination != "") {
        nomadService.passenger.destination = $scope.destination;
      }
      console.log(nomadService.passenger.origin);
      $location.path(path);
    };
  }]);