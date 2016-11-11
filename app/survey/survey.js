'use strict';

angular.module('myApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$scope', 'nomadService', function($scope, nomadService) {
  $scope.cities = nomadService.getDestinations();
}]);