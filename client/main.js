import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateHome from './template/home.html';
import templateForecast from './template/forecast.html';
import templateSample from './directives/sample.html';

// module
var tym = angular.module("tym", [angularMeteor, require('angular-route')]);

// routes
tym.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: templateHome,
		controller: "homeCtrl",
	})
	.when("/forecast", {
		templateUrl: templateForecast,
		controller: "forecastCtrl",
	})
});

// directives
tym.directive("sample", function() {
	return {
		templateUrl: templateSample,
		return: true,
	}
});

// controllers
tym.controller("homeCtrl", ["$scope", function($scope) {
	$scope.page = "home";
	console.log($scope.page);
}]);

tym.controller("forecastCtrl", ["$scope", function($scope) {
	$scope.page = "forecast";
	console.log($scope.page);
}]);
