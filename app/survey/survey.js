'use strict';

angular.module('myApp.survey', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/survey', {
      templateUrl: 'survey/survey.html',
      controller: 'SurveyCtrl'
    });
  }])

  .controller('SurveyCtrl', ['$scope', '$location', 'nomadService', '$timeout', function ($scope, $location, nomadService, $timeout) {
    $scope.origin = "";
    $scope.destination = "";
    $scope.destinationUrl = "";
    $scope.splashImage = "images/splash.jpg";
    //$scope.splashImage = "https://nomadlist.com/assets/img/cities/prague-czech-republic-1500px.jpg";
    //$scope.cities = [{ name: 'Prague, Czech Republic', url:  '/prague-czech-republic' }];
    $scope.cities = [];

    nomadService.getCities().$promise.then((cities) => {
      $scope.cities = cities;
      //console.log(JSON.stringify(cities));
    }, (error) => {
      console.log(JSON.stringify(error));
      });

    $scope.getImage = function (destinationName) {
      const destination = $scope.cities.find((city) => city.name === destinationName);
      const url = destination.url.substring(1, destination.url.length);
      nomadService.getImage({ url: url }).$promise.then((data) => {
        $scope.splashImage = data.image;
        console.log(JSON.stringify(data));
        $timeout(function () {
          $scope.$apply();
        }, 2000);
      }, (error) => {
        console.log(JSON.stringify(error));
      });
    }

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