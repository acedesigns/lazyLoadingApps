

(function(){
	'use strict';

	angular.module('app')
	.constant('JQ_CONFIG', {
      ngTouch:   [   '../../vendor/angular-touch/angular-touch.js'],
	})
	.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {

		$ocLazyLoadProvider.config({
			debug 	: true,
			events 	: true,
			modules	:[
				      {
                  name: 'GridRotator',
                  files: [
                      './assets/js/plug-ins/gridrotator.js'
                  ]
              },
              {
                  name: 'TweenMax',
                  files: [
                      './assets/js/plug-ins/TweenMax.min.js'
                  ]
              },
              {
                  name: 'NiceScroll',
                  files: [
                      './assets/js/plug-ins/nicescroll.js'
                  ]
              },
              {
                  name: 'owlCarousel',
                  files: [
                      './assets/js/plug-ins/owl-carousel.js'
                  ]
              },
              {
                  name: 'DropIt',
                  files: [
                      './assets/js/plug-ins/dropit.js'
                  ]
              },
              {
                  name: 'magnific',
                  files: [ 
                      './assets/js/plug-ins/magnific.js'
                  ]
              }
			]
		});		
	}]);
})();