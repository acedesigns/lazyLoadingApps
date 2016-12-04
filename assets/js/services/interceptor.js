
/* =============================================================================
 *	
 * =============================================================================
 */


(function() {
	angular.module('app')

	.factory('API_Interceptor', function($q, $injector, $state, $localStorage, $location) {
    'use strict';

    var service = this;

    // This method is called before $http sends the request to the backend
    service.request = function (config) {
      config.headers = config.headers || {};

      if ($localStorage.token) {
        config.headers.Authorization = '' + $localStorage.token;
      }

      return config;
    };
    // END ::This method is called before $http sends the request to the backend ::

    // This method is called right after $http receives the response from the backend
    service.response = function (response){
      return response;
    };
    // END This method is called right after $http receives the response from the backend

    //
    service.responseError = function (response) {
      if (response.status === 401 || response.status === 403  ) {

        delete $localStorage.token;

        //$state.go('login');
        $location.path('login');

      }
      return $q.reject(response);
    };

	});

})();
