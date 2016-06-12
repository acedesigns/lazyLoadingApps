/* =======================================================
 *
 * =======================================================
 */

var app =  
angular.module('app')
  .config([  '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 'datepickerConfig', 'datepickerPopupConfig',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide,   datepickerConfig,   datepickerPopupConfig) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
        datepickerConfig.showWeeks = false;
    }
  ])
  .run( function($rootScope, $window, $state) {
        
        $rootScope.$on('$stateChangeStart', function(event, toParams, fromState, fromParams, options) {
            //console.log('$stateChangeStart');
            //console.log(toParams);

        });
        
        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log(error);
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            //console.log('$stateChangeSuccess');
            
        });
  });