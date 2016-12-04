
/* =============================================================================
 *
 * =============================================================================
 */


(function() {
	angular.module('app')
	/*
	 *	The result of the function call is a resource class object which has
	 *	the following five methods by default:
	 * ========================================
	 * 	get() query() save() remove() delete()
	 * website/admin/services/region :: http://stackoverflow.com/questions/17160771/
	 * ========================================
	 */
	.factory('APIFactory', function($resource) {
		return {
			getRegions 		: $resource('http://localhost:3000/website/region'),
			getLanguages 	: $resource('http://localhost:3000/website/languages')
		};

	});
})();
