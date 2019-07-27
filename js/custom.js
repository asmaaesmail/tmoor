    function clearData(){
        window.clipboardData.setData('text','') 
    }
    function cldata(){
        if(clipboardData){
            clipboardData.clearData();
        }
    }
    setInterval("cldata();", 1000);


var yourNavigation = $(".clv_menu");

$(window).scroll(function() {
  if( $(this).scrollTop() > 20 ) {
    yourNavigation.addClass("sticky");
  } else {
    yourNavigation.removeClass("sticky");
  }
});
$(document).ready(function() {
  if( $(this).scrollTop() > 20 ) {
    yourNavigation.addClass("sticky");
  } else {
    yourNavigation.removeClass("sticky");
  }

});
(function($) {
    "use strict";
    var Asasiat = {
        initialised: false,
        version: 1.0,
        mobile: false, 
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Asasiat Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
   
        },
        /*-------------- Asasiat Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/

   
    };
Asasiat.init();
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if (scroll >= 100) {
		$(".header2_wrapper").addClass("header2_fix");
		$(".header3_wrapper").addClass("dark_header");
		$(".header4_wrapper").addClass("header4_fix");
	} else {
		$(".header2_wrapper").removeClass("header2_fix");
		$(".header3_wrapper").removeClass("dark_header");
		$(".header4_wrapper").removeClass("header4_fix");
	}
});
$(document).ready(function(){
	$('.success_close').on('click', function(){
		$('.success_wrapper').removeClass('open_success');
		$('.thankyou_wrapper').removeClass('open_thankyou');
		$('.signin_wrapper').removeClass('open_signin');
		$('.signup_wrapper').removeClass('open_signup');
	});
	$('.pop_signup').on('click', function(){
		$('.signin_wrapper').removeClass('open_signin');
		$('.signup_wrapper').addClass('open_signup');
	});
	$('.pop_signin').on('click', function(){
		$('.signup_wrapper').removeClass('open_signup');
		$('.signin_wrapper').addClass('open_signin');
	});
	$('.profile_toggle').on('click', function(){
		$('.signup_wrapper').toggleClass('open_signup');
		$('.signin_wrapper').removeClass('open_signin');
	});
	$(document).on('click', function(){
		$('.clv_right_header .clv_menu .clv_menu_nav').removeClass('nav_toggle');
		$('body').removeClass('overlayed');
	});
	$('.clv_right_header .clv_menu .clv_menu_nav').on('click', function(e){
		e.stopPropagation();
	});
	$('.menu_toggle').on('click', function(e){
		$('.clv_right_header .clv_menu .clv_menu_nav').toggleClass('nav_toggle');
		e.stopPropagation();
		$('body').toggleClass('overlayed');
	});
	if($(window).width()<= 991){
		$('.clv_menu_nav > ul > li').on('click', function(e){
			$(this).children('ul').slideToggle();
		});
	}

	
	

});
    

})(jQuery); 