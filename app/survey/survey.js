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
    $scope.cities = [{ name: 'Prague, Czech Republic', url:  '/prague-czech-republic' },
    { name: 'Berlin, Germany', url: '/berlin-germany'},
    { name: 'Budapest, Hungary', url: '/budapest-hungary'},
    { name: 'Montreal, Canada', url: 'montreal-canada'}];
    //$scope.cities = [];

    $scope.$watch(() => $scope.destination, (newVal, oldVal) => {
      console.log(`Val changed from ${oldVal} to ${newVal}`);
    });

    nomadService.getCities().$promise.then((cities) => {
      $scope.cities = cities;
      //console.log(JSON.stringify(cities));
    }, (error) => {
      console.log(JSON.stringify(error));
      });

    $scope.saveOrigin = function(originName){
      const origin = $scope.cities.find((city) => city.name === originName);
      nomadService.passenger.origin = origin;
      console.log(nomadService.passenger.origin.id);
    }

    $scope.saveDestination = function(destinationName){
      const destination = $scope.cities.find((city) => city.name === destinationName);
      nomadService.passenger.destination = destination;
      console.log(nomadService.passenger.destination.id);
    }

    $scope.getImage = function (destinationName) {
      console.log(destinationName);
      $scope.saveDestination(destinationName);
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
      nomadService.passenger.city = $scope.chosenCity;
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