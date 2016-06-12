


(function(){
	'use strict';
	angular.module('app')
	.controller('ProductResultsCtrl',  function($scope, $modal, $filter, $stateParams, APIFactory){
		var foundLocation = false;
		//Simple models
		angular.extend($scope, {
			imageSlides 	: [
								{image: 'img/culture1.jpg'}, {image: 'img/culture2.jpg'}, 
								{image: 'img/culture3.jpg'}, {image: 'img/culture4.jpg'}, 
								{image: 'img/culture5.jpg'}, {image: 'img/culture6.jpg'}, 
								{image: 'img/culture7.jpg'}, {image: 'img/culture8.jpg'},
								{image: 'img/culture9.jpg'}, {image: 'img/culture10.jpg'}, 
								{image: 'img/culture11.jpg'},{image: 'img/culture12.jpg'}, 
								{image: 'img/culture13.jpg'},{image: 'img/culture14.jpg'}, 
								{image: 'img/culture15.jpg'},{image: 'img/culture16.jpg'},
							 ],
		});

		console.log($stateParams);

		APIFactory.getRegions().then(function(items){
			$scope.regions = items;
			console.log($scope.regions);
			for (var i = 0; i < $scope.regions.length; i++) {
				if ($scope.regions[i].id == $stateParams.productId) {
					$scope.SearchLocation = $scope.regions[i].Region;
					foundLocation = true;
				}
				if (foundLocation) {
					break;
				}
			}
		});

		APIFactory.getSpecificProd($stateParams).then(function(items){
			$scope.dataset 		= items;
		});
	});
})();