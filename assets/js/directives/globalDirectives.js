/* =======================================================
 *
 * =======================================================
 */
 
(function(){
	'use strict';

	angular.module('app')
	
	.directive('footer', function($window){
		
		function jQueryFunction($scope, element, attrs, controller) {
			var docHeight = $(window).height(),
				footerHeight = $(element).height(),
				footerTop = $(element).position().top + footerHeight;

			if (footerTop < docHeight) {
    			$(element).css('margin-top', (docHeight - footerTop) + 'px');
    		}
		}

		return {
			restrict: 'AE',
			link: jQueryFunction
		};
	})
	
	.directive('scroll', function($window){

		function scrollFunction ($scope, element, attrs, $controller){
			var $scroll = $(element);

			$scroll.niceScroll({
				cursorcolor: "#000",
		        cursorborder: "0px solid #fff",
		        railpadding: {
		            top: 0,
		            right: 0,
		            left: 0,
		            bottom: 0
		        },
		        cursorwidth: "10px",
		        cursorborderradius: "0px",
		        cursoropacitymin: 0.2,
		        cursoropacitymax: 0.8,
		        boxzoom: true,
		        horizrailenabled: false,
		        zindex: 9999 
		    });
		}

		return{
			restrict : 'A',
			link : scrollFunction
		};
	})

	.directive('grider',  function(){
		
		function griderFunction ($scope, element, iAttrs, controller) {
			var $slider = $(element);
			$slider.gridrotator({
		        rows: 4,
		        columns: 8,
		        animType: 'random',
		        animSpeed: 1200,
		        interval: 1200,
		        step: 'random',
		        preventClick: false,
		        maxStep: 2,
		        w992: {
		            rows: 5,
		            columns: 4
		        },
		        w768: {
		            rows: 6,
		            columns: 3
		        },
		        w480: {
		            rows: 8,
		            columns: 3
		        },
		        w320: {
		            rows: 5,
		            columns: 4
		        },
		        w240: {
		            rows: 6,
		            columns: 4
		        }
		    });
		}
		
		return {
			restrict: 'A',
			link: griderFunction
		};
	})
	
	.directive('popupgallery', function(){
		
		function popupgallery ($scope, element, attr) {
			angular.forEach(angular.element('#popup-gallery'), function(val, key){
				var gallery  = angular.element(val);
				gallery.magnificPopup({
					delegate: 'a.popup-gallery-image',
			        type: 'image',
			        gallery: {
			            enabled: true,
			        }
				});
			});
		}

		return {
			 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			link: popupgallery
		};
	})

	.directive('selectnum', function(){
		
		function selectNumber ($scope, element, attrs, controller) {
			
			angular.forEach(angular.element(".form-group-select-plus"), function(value, key){
				var a = angular.element(value);

				var self = a, clickBtn,
        			btnGroup 	= self.find('.btn-group').first(),
        			select 		= self.find('select'),
        			labelSel	= self.find('label.btn-primary');

        		btnGroup.children('label').last().click(function() {
        			btnGroup.addClass('hidden');
        			select.removeClass('hidden');
    			});
			});
		}

		return {
			restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
			link: selectNumber
		};
	})
	
	.directive('owl',  function($window, $injector) {

		function Carousel ($scope, element, attr) {
			
			// Owl Carousel
        	var owlCarousel 		= $(element),
        	    owlItems 			= owlCarousel.attr('data-items'),
            	owlCarouselSlider 	= $(element[0].id),
            	owlNav 				= owlCarouselSlider.attr('data-nav');

            owlCarousel.owlCarousel({
            	items: owlItems,
            	navigation: true,
            	navigationText: ['', '']
        	});

        	owlCarouselSlider.owlCarousel({
            	slideSpeed: 300,
            	paginationSpeed: 400,
            	// pagination: owlSliderPagination,
            	singleItem: true,
            	navigation: true,
            	navigationText: ['', ''],
            	transitionStyle: 'fade',
            	autoPlay: 4500
        	});

        	//console.log(" =================================== ");
        	//console.log(owlCarousel); 036 637 7081 
        	/* Nombulelo Mashiqa 410-000962 R 533 == R 6750.42*/
		}

		return {
			restrict : 'AE',
			link: Carousel
		};
	})
	
	.directive('dialog', function(){
		
		function dialogFn ($scope, element, attrs) {
			console.log("dialogFn function");
			
			//element.magnificPopup();
			//console.log(element);
			//popUp.magnificPopup();
		}

		return {
			restrict: 'AE',
			link: dialogFn
		};
	})
	
	.directive('dropit', function(){
		
		function dropNaenae ($scope, element, attr){
			element.dropit();
		}

		// Runs during compile
		return {
			restrict: 'AE',
			link: dropNaenae
		};
	})
	
	.directive('expandRevTxt', function(){
		/*
			$('.booking-item-review-expand').click(function(event) {
			    console.log('baz');
			    var parent = $(this).parent('.booking-item-review-content');
			    if (parent.hasClass('expanded')) {
			        parent.removeClass('expanded');
			    } else {
			        parent.addClass('expanded');
			    }
			});
		*/
		
		function expandRevTxt ($scope, element, attr) {

			element.find('.booking-item-review-expand').click(function () {
				console.log('yes');
			});
		}
		
		return {
			restrict	: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
			link		: expandRevTxt
		};
	});
})();


(function() {
	'use strict';

	angular.module('app')
	.animation('.slide-animation', function(){
		return {
			addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    TweenMax.set(element, { left: element.parent().width() });
                    TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
		};
	})
	.controller('homeSlideCtrl', function($scope){
		$scope.slides = [
            {image: '../img/2048x1365-copy5.png', price : '1 800', 	title: 'Adventure Activities'},
            {image: '../img/2048x1365-copy4.png', price : '950', 	title: 'Cape Winelands'},
            {image: '../img/2048x1365-copy3.png', price : '9 500',	title: 'Cape Town'}
        ];
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
	});

})();