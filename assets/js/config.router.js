/* =============================================================================
 *
 * =============================================================================
 */

(function() {
	'use strict';

	angular.module('app')
  	.run([        '$rootScope', '$state', '$stateParams',
      	function ( $rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      	}
    ])
    .config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 'JQ_CONFIG',
        function(   $stateProvider,   $urlRouterProvider,   $locationProvider ,  JQ_CONFIG) {
  	    //$locationProvider.html5Mode({enabled:true, requireBase:true});

  	    $urlRouterProvider.otherwise('/app/home');

  	  $stateProvider
    	 .state('app', {
          abstract: true,
  			  url        : '/app',
          templateUrl: 'views/app.html',
          resolve    : {
            deps  :['$ocLazyLoad', function($ocLazyLoad){
              //return $ocLazyLoad.load(['.assets/js/controllers/connCtrl.js']);
            }]
          }
      	})
        .state('app.home', {
          url: '/home',
          templateUrl: '../views/home.html',
          resolve: {
            deps: ['$ocLazyLoad', 'uiLoad',
              function( $ocLazyLoad, uiLoad ){
                return $ocLazyLoad.load(['GridRotator', 'owlCarousel', 'TweenMax'])
                  .then( function(){
                    return $ocLazyLoad.load([
                      './assets/js/controllers/homeCtrl.js',
                      './assets/js/factories/reports.factory.js',
                    ]);
                  });
              }
            ]
          }
        })

        /*
        .state('app.search-results',{
          url     : '/search-results?city&category',
          templateUrl : 'views/search-tours.html',
          resolve     : {
            deps    : ['$ocLazyLoad', function($ocLazyLoad){
              return $ocLazyLoad.load(['DropIt'])
                .then( function(){
                  return $ocLazyLoad.load([
                    'js/controllers/searchCtrl.js',
                    'js/filters/filters.js',
                    'js/factories/reports.factory.js',]);
                });
            }]
          }
        })
        .state('app.product-tour', {
          url         : '/product-tour',
          params      : {
            productId : ''
          },
          templateUrl : 'views/product-tour.html',
          resolve     : {
            deps    : ['$ocLazyLoad', function($ocLazyLoad){
              return $ocLazyLoad.load(['magnific'])
                .then( function(){
                  return $ocLazyLoad.load([
                  'js/controllers/productCtrl.js',
                  'js/factories/reports.factory.js'
                  ]);
                });
            }]
          }
        })

        .state('app.about', {
          url : '/about',
          templateUrl : 'views/about.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function( $ocLazyLoad ){
                return $ocLazyLoad.load([
                  'GridRotator',
                ]);
              }
            ]
          }
        });*/
    }]);
})();
