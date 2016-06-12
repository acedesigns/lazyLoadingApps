

(function(){
	'use strict';

	angular.module('app')
	.constant('JQ_CONFIG', {
      ngTouch:   [   './vendor/angular-touch/angular-touch.js'],
	})
	.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {

		$ocLazyLoadProvider.config({
			debug 	: true,
			events 	: true,
			modules	:[
				      {
                  name: 'GridRotator',
                  files: [
                      './js/plug-ins/gridrotator.js'
                  ]
              },
              {
                  name: 'TweenMax',
                  files: [
                      './js/plug-ins/TweenMax.min.js'
                  ]
              },
              {
                  name: 'NiceScroll',
                  files: [
                      './js/plug-ins/nicescroll.js'
                  ]
              },
              {
                  name: 'owlCarousel',
                  files: [
                      './js/plug-ins/owl-carousel.js'
                  ]
              },
              {
                  name: 'DropIt',
                  files: [
                      './js/plug-ins/dropit.js'
                  ]
              },
              {
                  name: 'magnific',
                  files: [ 
                      './js/plug-ins/magnific.js'
                  ]
              }
			]
		});		
	}]);
})();