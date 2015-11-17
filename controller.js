var countryApp = angular.module('countryApp', []);

countryApp.controller('countryCntrl', function($scope, $http){

	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
		console.log($scope.countries);
	});
}); 