'use strict';

angular.module('myApp.preferences1', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preferences1', {
      templateUrl: 'preferences1/preferences1.html',
      controller: 'Preferences1Ctrl'
    });
  }])

  .controller('Preferences1Ctrl', ['$scope', '$location', 'nomadService', function ($scope, $location, nomadService) {
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