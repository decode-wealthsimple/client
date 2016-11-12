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
      nomadService.postTrip({
        origin: nomadService.passenger.origin,
        destination: nomadService.passenger.destination,
        start: "2018/04/3",
        end: "2018/04/28",
        style: 3,
        saved_amount: 0,
        total_amount: 0
      }).$promise.then((res) => {
        nomadService.passenger.id = res.id;
      }).catch((res) => {
        console.log(res);
      })
      $location.path(path);
    };
  }]);