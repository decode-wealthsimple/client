'use strict';

angular.module('myApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$scope', 'nomadService', function($scope, nomadService) {
  $scope.origin = "Montreal, Canada";
  $scope.destination = "Berlin, Germany";
  $scope.cities = [];
    nomadService.getDestinations().$promise.then((cities) => {
      $scope.cities = cities;
    });
}]);