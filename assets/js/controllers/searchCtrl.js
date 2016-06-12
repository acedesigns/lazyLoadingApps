


(function(){
	'use strict';
	angular.module('app')
	.controller('searchResultsCtrl',  function($scope, $modal, $log, $filter, $stateParams, APIFactory){
		var foundLocation = false;
 
		//Simple models
		angular.extend($scope, {
			totalItems 		: 8,
			currentPage		: 4,
			regions			: [],
			SearchLocation	: '',
			year			: new Date(),
			lacSearch		: $stateParams.departPoint,
			strtDateSearch	: $filter('date')($stateParams.startDateSerch, 'dd MMMM'),
			endDateSearch	: $filter('date')($stateParams.endDateSerch, 'dd MMMM'),
			welcomeHome		: ''
		});

		/* ---------------------------------------------------
			http://jsfiddle.net/ccnokes/GktTd/
			To do the elippes to the text when its too long
			--------------------------------------------------
		*/

		APIFactory.getRegions().then(function(items){
			$scope.regions = items;
			for (var i = 0; i < $scope.regions.length; i++) {
				if ($scope.regions[i].id == $stateParams.city) {
					$scope.SearchLocation = $scope.regions[i].Region;
					foundLocation = true;
				}
				if (foundLocation) {
					break;
				}
			}
		});

		APIFactory.searchTours($stateParams).then(function(items){
			$scope.dataset 		= items;
			$scope.dbTotalCount = $scope.dataset.length;


			if ($scope.dbTotalCount >=2) {
				$scope.countHeading = "There are " + $scope.dbTotalCount + " things to do in " + $scope.SearchLocation;	
			}
			else {
				$scope.countHeading = "There is " + $scope.dbTotalCount + " thing to do in " + $scope.SearchLocation;	
			}
		});


		// Complex Methods
		angular.extend($scope, {
			order	: function() {
				//$scope.reverse	 = ($scope.predicate === predicate) ? !$scope.reverse : false;
				//$scope.predicate = predicate;
			},

			changeSearchDayTours : function(){
				var modalInstance = $modal.open({
				    animation 		: $scope.animationsEnabled,
				    templateUrl		: 'views/includes/changeSearch.html',
				    backdrop      	: 'static',
	  				keyboard      	: false,
				    controller 		: 'ModalInstanceCtrl',
				    resolve 		: {
				    	exports : function() {
				    		return APIFactory;
				    	}
				    }
				});
			},

			pageChanged : function() {
				$log.log('Page changed to: ' + $scope.currentPage);
			},
			
			bookDayTour : function() {
				var modalInstance = $modal.open({
				    animation 		: $scope.animationsEnabled,
				    templateUrl		: 'views/includes/bookdayTour.html',
				    backdrop      	: 'static',
	  				keyboard      	: false,
				    controller 		: 'ModalInstanceCtrl',
				    resolve 		: {
				    	exports : function() {
				    		return "Anele Test Export";
				    	}
				    },
				});
			}
		});	
	});
})();

(function(){
	'use strict';

	angular.module('app')
	.controller('ModalInstanceCtrl', function($scope, $filter, $modalInstance, exports){
		
		angular.extend($scope, {	  		
	  		changeSearchDayToursModal : function(changedSearch, formName){
	  			$scope.Obj = {
      				startDateSerch 	: $filter('date')(changedSearch.startDateSerch, 'dd-MM-yyyy'),
     	 			endDateSerch 	: $filter('date')(changedSearch.endDateSerch,   'dd-MM-yyyy'),
		    		departPoint     : changedSearch.departPoint,
				};

				$scope.$watch('strtDateSearch', function(oldV, newV) {
					console.log("OLdv strtDateSearch");
					console.log(oldV);

					console.log("new strtDateSearch");
					console.log(newV);
				});


				console.log($scope.Obj);
			},
			
			cancel : function () {
	    		$modalInstance.dismiss('cancel');
	  		},
	  		DayToursBooked : function() {
	  			console.log("I wanna make this booking");
	  		}
		});
	});
})();



