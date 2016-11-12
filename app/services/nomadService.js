var myModule = angular.module('myApp.nomadService', []);
myModule.factory('nomadService', ['$http', '$resource', function ($http, $resource) {
    let instance = {};
    let baseUrl = 'http://localhost:3000/';

        // function () {
    //     Cities.get().$promise.then((cities) => {
            
    //     });

    var Cities = $resource(baseUrl + 'nomad/cities', { }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var Trips = $resource(baseUrl + 'trips/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var NewTrip = $resource(baseUrl + 'trips/new/.:format', { format: '@format'});
    var EditTrip = $resource(baseUrl + 'trips/:id/edit/.:format', { id: '@id', format: '@format' });
    var Trip = $resource(baseUrl + 'trips/:id', { id: '@id' });

    //instance.getOrigins = Trips.get;
    instance.getOrigins = function() {
        return [
            'Japan',
            'Kyoto',
            'America'
        ]
    }

    instance.getDestinations = Trips.get;

    /*
    instance.getDestinations = function () {
        return [
            'Amsterdam',
            'Berlin',
            'Toronto',
            'Montreal',
        ];
    }
    */

    instance.getStyles = function () {
        return [
            'Backpacker',
            'Conservative',
            'BigSpender'
        ];
    };

    return instance;
}]);