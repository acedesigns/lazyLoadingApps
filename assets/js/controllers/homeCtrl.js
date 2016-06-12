

(function(){
	'use strict';
	angular.module('app')
	.controller('homeCtrl', function($scope, $location, $http, $filter, $state, APIFactory) {
		
		
		APIFactory.getLanguages().then(function(items){
			$scope.langs = items;
			console.log($scope.langs);
		});

		APIFactory.getRegions().then(function(items){
			$scope.regions = items;
			console.log($scope.regions);
		});
		
		/*
			http://www.keyboardninja.eu/webdevelopment/a-simple-search-with-angularjs-and-php
			http://techfunda.com/howto/565/http-post-server-request
		*/

		//Models
		angular.extend($scope,{
			hmSearch    : [],
			departPoint : '',
		});

		//Methods
		angular.extend($scope, {
      		searchEMDT : function(hmSearch) {
      			$scope.Obj = {
		          	city 	        : hmSearch.departPoint.id,
		          	category		: "MultiDayTour"
		        };

		        $state.go('app.search-results', $scope.Obj);
			},

			searchEDT : function(hmSearch) {
      			$scope.Obj = {
		          	city 	        : hmSearch.departPoint.id,
		          	category		: "DayTour"
		        };
		        $state.go('app.search-results', $scope.Obj);
			}
		});
	});
})();
