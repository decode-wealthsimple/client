'use strict';

angular.module('myApp.preferences', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preferences', {
      templateUrl: 'preferences/preferences.html',
      controller: 'PreferencesCtrl'
    });
  }])

  .controller('PreferencesCtrl', ['$scope', '$location', 'nomadService', function ($scope, $location, nomadService) {
    $scope.style = "";
    $scope.styles = nomadService.getStyles();
    /*
    nomadService.getStyles().$promise.then((styles) => {
      $scope.styles = styles;
      console.log(JSON.stringify(styles));
    }, (error) => {
      console.log(JSON.stringify(error));
      });
      */

    $scope.go = function (path) {
      nomadService.passenger.preferences = $scope.styles;
      $location.path(path);
    };
  }]);