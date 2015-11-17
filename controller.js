var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider){
	$routeProvider.when('/',{
		template: '<ul><li ng-repeat="country in countries">{{country.name}}</li></ul>',
		controller: 'countryCntrl'
	}).
	when('/:countryName',{
		template: '<h1>Country detail will go here.</h1>',
		controller: 'countryDetailCntrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

countryApp.controller('countryCntrl', function($scope, $http){

	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
	});
}); 

countryApp.controller('countryDetailCntrl', function($scope, $routeParams){
	console.log($routeParams);
});