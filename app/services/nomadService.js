var myModule = angular.module('myApp.nomadService', []);
myModule.factory('nomadService', ['$http', '$resource', function ($http, $resource) {
    let instance = {};
    let baseUrl = 'http://localhost:3000/';

    instance.passenger = new Passenger();

    const Cities = $resource(baseUrl + 'nomad/cities/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    const Trips = $resource(baseUrl + 'trips/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    const NewTrip = $resource(baseUrl + 'trips/new/.:format', { format: '@format'}, { headers: { 'Access-Control-Allow-Origin': '*' }});
    const EditTrip = $resource(baseUrl + 'trips/:id/edit/.:format', { id: '@id', format: '@format' }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    const Trip = $resource(baseUrl + 'trips/:id', { id: '@id' }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    const Image = $resource(baseUrl + '/nomad/cities/:url/image', { id: '@url' }, { headers: { 'Access-Control-Allow-Origin': '*' }});
    
    instance.getTrips = Trips.get;
    instance.getCities = Cities.query;
    instance.getImage = Image.get;
    instance.getTrip = Trip.get;
    instance.postTrip = Trip.post;

    instance.getStyles = function () {
        return [
            'Backpacker',
            'Conservative',
            'BigSpender'
        ];
    };

    return instance;
}]);