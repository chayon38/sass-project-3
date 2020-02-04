$(document).ready(function(){
	 $('.nav').onePageNav();
	 
	 $(".search-ico").click(function(){
	    $(".search-option").slideToggle();
	  });

	 $(".menu-icon").click(function(){
	  	$("nav").addClass("nav-show");
	});
	 $(".nav-close").click(function(){
	  	$("nav").removeClass("nav-show");
	});


	$('#nav').slicknav();
	$('.owl-one').owlCarousel({
		items:4,
		loop:true,
		autoplay:false,
		dots: false,
		autoplayTimeout:2500,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:2
			},
			575:{
				items:2
			},
			710:{
				items:4
			}
		}
	})
	$('.owl-two').owlCarousel({
		items:2,
		loop:true,
		autoplay:false,
		autoplayTimeout:2500,
		margin:50,
		center:true,
		responsive:{
			0:{
				items: 1
			},
			768:{
				items: 1
			},
			1200:{
				items: 2
			}
		}
	})
	$('.owl-three').owlCarousel({
		items:3,
		loop:false,
		autoplay:false,
		margin:50,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})


	var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 400) {
            jQuery('.to-top').fadeIn(duration);
        } else {
            jQuery('.to-top').fadeOut(duration);
        }
    });

    jQuery('.to-top').click(function(event) {
        event.preventDefault();
        jQuery('html').animate({scrollTop: 0}, duration);
        return false;
    })

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 350) {
            jQuery('.header-2').fadeIn(duration);
        } else {
            jQuery('.header-2').fadeOut(duration);
        }
    });





})

