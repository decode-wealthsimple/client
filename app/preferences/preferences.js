'use strict';

angular.module('myApp.preferences', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preferences', {
      templateUrl: 'preferences/preferences.html',
      controller: 'PreferencesCtrl'
    });
  }])

  .controller('PreferencesCtrl', ['$scope', 'nomadService', function ($scope, nomadService) {
    $scope.style = "";
    $scope.styles = [];
    nomadService.getStyles().$promise.then((styles) => {
      $scope.styles = styles;
      console.log(JSON.stringify(styles));
    }, (error) => {
      console.log(JSON.stringify(error));
    });
  }]);