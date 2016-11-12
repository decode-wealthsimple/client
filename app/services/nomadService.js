var myModule = angular.module('myApp.nomadService', []);
myModule.factory('nomadService', ['$http', '$resource', function ($http, $resource) {
    let instance = {};
    let baseUrl = 'http://localhost:3000/';

    instance.passenger = new Passenger();

    var Cities = $resource(baseUrl + 'nomad/cities/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var Trips = $resource(baseUrl + 'trips/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var NewTrip = $resource(baseUrl + 'trips/new/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var EditTrip = $resource(baseUrl + 'trips/:id/edit/.:format', { id: '@id', format: '@format' }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var Trip = $resource(baseUrl + 'trips/:id', { id: '@id' }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    var Image = $resource(baseUrl + '/nomad/cities/:url/image', { id: '@url' }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    
    instance.getTrips = Trips.get;
    instance.getCities = Cities.query;
    instance.getImage = Image.get;

    instance.getStyles = function () {
        return [
            'Backpacker',
            'Conservative',
            'BigSpender'
        ];
    };

    return instance;
}]);