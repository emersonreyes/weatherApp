import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateHome from './template/home.html';
import templateForecast from './template/forecast.html';
import templateSample from './directives/sample.html';
import { Pb } from '/lib/collections.js'

// module
const tym = angular.module("tym", [angularMeteor, require('angular-route')]);

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
tym.controller("homeCtrl", ["$scope", "$reactive", function($scope, $reactive) {
	$reactive(this).attach($scope);

	$scope.page = "home";
	console.log($scope.page);

	this.helpers({
	    myData: () => {
	    	// find pb item
	    	console.log(Pb.find({_id:"NaJPNTs7aZZ5PHcFp"}).fetch());
	      //return Pb.find({});
	    },
	    addCin: () => {
	    	// insert in pb
	    	Pb.insert({
	    		name: "cin2",
	    	});
	    },
  	});
}]);

tym.controller("forecastCtrl", ["$scope", function($scope) {
	$scope.page = "forecast";
	console.log($scope.page);
}]);

//console.log(Pb.find({name : "em"}));

