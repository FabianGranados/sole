(function($) {
	
	"use strict";
	

	
$(document).ready(function () {
  var howMany = 12;
  var listButton = $('button.mr_list-view');
  var gridButton = $('button.mr_grid-view');
  var wrapper = $('div.mr_wrapper');

  listButton.on('click', function () {
    gridButton.removeClass('on');
    listButton.addClass('on');
    wrapper.removeClass('grid').addClass('list');
  });

  gridButton.on('click', function () {
    listButton.removeClass('on');
    gridButton.addClass('on');
    wrapper.removeClass('list').addClass('grid');
  });
});



	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.mr_loader-wrap').length){
			$('.mr_loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".mr_preloader-close").length) {
        $(".mr_preloader-close").on("click", function(){
            $('.mr_loader-wrap').delay(200).fadeOut(500);
        })
    }
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.mr_main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.mr_main-header');
			var scrollLink = $('.mr_scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('mr_fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('mr_fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.mr_main-header li.dropdown ul').length){
		$('.mr_main-header .mr_navigation li.dropdown').append('<div class="mr_dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}
	
	//Menu Toggle Btn
		$('.mr_mobile-nav-toggler').on('click', function() {
			$('body').addClass('mr_mobile-menu-visible');
		});

	//Mobile Nav Hide Show
	if($('.mr_mobile-menu').length){
		
	
		
		var mobileMenuContent = $('.mr_main-header .mr_menu-area .mr_main-menu').html();
		$('.mr_mobile-menu .mr_menu-box .mr_menu-outer').append(mobileMenuContent);
		$('.mr_sticky-header .mr_main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mr_mobile-menu li.dropdown .mr_dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mr_mobile-menu li.dropdown .mr_dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		

		//Menu Toggle Btn
		$('.mr_mobile-menu .mr_menu-backdrop,.mr_mobile-menu .mr_close-btn').on('click', function() {
			$('body').removeClass('mr_mobile-menu-visible');
		});
	}


	// Scroll to a Specific Div
	if($('.mr_scroll-to-target').length){
		$(".mr_scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
//nice select
	$(document).ready(function() {
      $('select:not(.ignore)').niceSelect();
    });

	// Scroll top button
	$('.mr_scroll-top-inner').on("click", function () {
		$('html, body').animate({scrollTop: 0}, 500);
		return false;
	});

	function handleScrollbar() {
        const bHeight = $('body').height();
        const scrolled = $(window).innerHeight() + $(window).scrollTop();

        let percentage = ((scrolled / bHeight) * 100);


        $('.mr_scroll-top-inner .mr_bar-inner').css( 'width', percentage + '%');
    }


	//Tabs Box
	if($('.mr_tabs-box').length){
		$('.mr_tabs-box .mr_tab-buttons .mr_tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.mr_tabs-box').find('.mr_tab-buttons').find('.mr_tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.mr_tabs-box').find('.mr_tabs-content').find('.mr_tab').fadeOut(0);
				target.parents('.mr_tabs-box').find('.mr_tabs-content').find('.mr_tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	function tabpane() {
		if($('.tab-pane').length){
			$('.tab-pane').delay(10).css("display", "none");
		}
	}

	// banner-carousel
	if ($('.mr_banner-carousel').length) {
        $('.mr_banner-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span></span>', '<span></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }

	// single-item-carousel
	if ($('.mr_single-item-carousel').length) {
		$('.mr_single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="far fa-long-arrow-left"></span>', '<span class="far fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}
	
	//five-item-carousel
	if ($('.mr_five-item-carousel').length) {
		$('.mr_five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}

	
	if ($('.mr_theme_carousel').length) {
		$(".mr_theme_carousel").each(function (index) {
			var $owlAttr = {},
			$extraAttr = $(this).data("options");
			$.extend($owlAttr, $extraAttr);
			$(this).owlCarousel($owlAttr);
		});
	}


	//Price Range Slider
	if($('.mr_price-range-slider').length){
		$( ".mr_price-range-slider" ).slider({
			range: true,
			min: 120,
			max: 500,
			values: [ 120, 300 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".mr_price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".mr_price-range-slider" ).slider( "values", 1 ) );	
	}


	//Jquery Spinner / Quantity Spinner
	if($('.mr_quantity-spinner').length){
		$("input.mr_quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}


	//Tabs Box
	if($('.mr_tabs-box').length){
		$('.mr_tabs-box .mr_tab-buttons .mr_tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.mr_tabs-box').find('.mr_tab-buttons').find('.mr_tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.mr_tabs-box').find('.mr_tabs-content').find('.mr_tab').fadeOut(0);
				target.parents('.mr_tabs-box').find('.mr_tabs-content').find('.mr_tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}



	if ($('.mr_product-details-content .mr_bxslider').length) {
		$('.mr_product-details-content .mr_bxslider').bxSlider({
	        nextSelector: '.mr_product-details-content #slider-next',
	        prevSelector: '.mr_product-details-content #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.mr_product-details-content .mr_slider-pager .mr_thumb-box'
	    });
	};

	if ($('.mr_bxslider').length) {
		$('.mr_bxslider').bxSlider({
	        nextSelector: '.mr_bx-slider-area #nextText',
	        prevSelector: '.mr_bx-slider-area #prevText',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '#bx-pager'
	    });
	};

	//Search Popup
	if($('#mr_search-popup').length){
		
		//Show Popup
		$('.mr_search-toggler').on('click', function() {
			$('#mr_search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#mr_search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.mr_close-search,.mr_search-popup .mr_overlay-layer').on('click', function() {
			$('#mr_search-popup').removeClass('popup-visible');
		});
	}
    

	/* ==========================================================================
   When document is Ready, do
   ========================================================================== */
	
	$(window).on('ready', function() {
		tabpane();
	});


	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		handleScrollbar();
		if ($(window).scrollTop() > 200) {
			$('.mr_scroll-top-inner').addClass('visible');
		} else {
			$('.me_scroll-top-inner').removeClass('visible');
		};
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {		
		handlePreloader();
	});

	

})(window.jQuery);