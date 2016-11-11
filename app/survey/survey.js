'use strict';

angular.module('myApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$scope', function($scope) {
  $scope.cities = [
    'Amsterdam',
    'Berlin',
    'Toronto',
    'Montreal',
  ];
}]);