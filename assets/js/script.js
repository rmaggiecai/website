//Set image size on load

$(document).ready(function() {

	//set cover image height
	var setWindowWidth = function() {
		return parseInt($(window).width());
	};
		
	var setWindowHeight = function() {
		return parseInt($(window).height());
	};
	// if ($(window).width() > 768){
			$('#slide-1').height(setWindowHeight);
		$('#startImage').height(setWindowHeight);

	// } else {
		// var setHeight = 1.6*($('#slide-1 #title-info').height() + $('#slide-1 nav').height());
		// $('#slide-1').height(setHeight);
		// $('#startImage').height(setHeight);
		// if ($(window).width() <= 768)
		// $('.navbar-collapse').width($(window).width()-30);
	//}

});

//set my work section width
$(function() {
	var pause = 50; // will only process code within delay(function() { ... }) every 100ms.
	$(window).resize(function() {
		delay(function() {
				var gallery_images = $('#portfolio figure');
				var gallery_width = gallery_images.width() * gallery_images.length + 25;
				
				$('#portfolio .row').css('width', gallery_width );

				// var left_pos = $('#portfolio .row').width() - $('body').width();
				// left_pos /= -2;

				// $('#portfolio .row').css('left', left_pos);
			
			},
			pause
		);
	});
	$(window).resize();
});

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

//navigation/ button clicks
jQuery(document).ready(function ($) {
	//Cache some variables
	
	var arrows = $('#controls button');
	
	arrows.click(function(e) {
		e.preventDefault();
		
		// if ( $(this).hasClass('inactive') )
		// 	return;
		
		var slide = null;
		// var datasheet = $('.nav > li.active').data('slide');
		// var offset_top = false;
		var offset_left;
		
		
		switch( $(this).attr('id') ) {
			case 'left':
				offset_left = $('#portfolio').scrollLeft() - 452;

				break;
			case 'right':
				offset_left = $('#portfolio').scrollLeft() + 452;
				
				break;
		}

		if ( $('#portfolio .row').width() != $('body').width() ) {
			console.log("animation");
			$("#slide-3 #portfolio").animate({
			    scrollLeft: offset_left
			  }, 1500, 'easeInOutQuart' );
		}
		checkButtonStyle(offset_left);
	});

	$("#slide-3 #portfolio").scroll(function(event) {
		checkButtonStyle($(this).scrollLeft());
		/* Act on the event */
	});

});

function buttonStyle( button,active ){
	if (active) 
		$(button).removeClass('inactive');
	else 
		$(button).addClass('inactive');
};

function checkButtonStyle( placement ){
	
	// console.log(placement);
	// var placement =parseInt(rowPlacement.scrollLeft());

	
	if (placement <= 0){

		buttonStyle($('#controls #left'),false);
		buttonStyle($('#controls #right'),true);
	} else {

		buttonStyle($('#controls #left'),true);
		// console.log($(rowPlacement).width());
		// console.log(placement);

		if ($("#portfolio").width() <= placement)
			buttonStyle($('#controls #right'),false);
		else 
			buttonStyle($('#controls #right'),true);

	}
};

//sticky header
$(document).ready(function($) {
	$(document).scroll(function(){
		var navHeight = 0;

		if (window.location.pathname == "/"){
			if ($(window).width() <= 768){
				navHeight= $("#slide-1").height() - 53;
			} else {
				navHeight= $(window).height() - 70;
			}

			if ($(document).scrollTop() >= navHeight){
				$('nav').removeClass('navbar-clear');
			} else {
				$('nav').addClass('navbar-clear');

			}
		} 

	});
	
});

//move to page
jQuery(document).ready(function ($) {
	//Cache some variables
	if (window.location.pathname == "/"){
		var links = $('.nav').find('li');
		slide = $('.slide');
		button = $('.button');
		mywindow = $(window);
		htmlbody = $('html,body');
		
		//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
		//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
		function goToByScroll(dataslide) {
			// console.log('.slide[data-slide="' + dataslide + '"]');
			var offset_top = 0;
			if ($(window).width() <= 768){ 
				if($("nav").hasClass('navbar-bottom')){
					offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;
				} else {
					offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top-227;
				}
				
			} else {
				offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;
			}
			htmlbody.stop(false, false).animate({
				scrollTop: offset_top
			}, 1500, 'easeInOutQuart');
		}
		
		//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
		links.click(function (e) {
			e.preventDefault();
			var dataslide = $(this).attr('data-slide');
			goToByScroll(dataslide);
			if ($(window).width() <= 768){
				$(".navbar-collapse").collapse('hide');
				$("#slide-2").toggleClass('movingDown');
				if($("nav").hasClass('navbar-bottom')){
					$("#slide-1").toggleClass('movingUp');
				}
			}
		});
		
		//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
		// $('.navigation-slide').click(function (e) {
		// 	e.preventDefault();
		// 	var dataslide = $(this).attr('data-slide');
		// 	goToByScroll(dataslide);
		// 	$(".collapse").collapse();
		// });

		$(document).scroll(function(event) {
			var location = $(this).scrollTop();
			var tops = [];
								
			$('.slide').each(function(index, element) {
				tops.push( $(element).offset().top);
			});

			for (i = 0; i < 4; i++){
				if (i < 3){
					if (location >= tops[i] && location < tops[i+1]){
						setMenu(i);
						break;
				   }
				} else {
					setMenu(i);
				}
			}
		});

	}

});

function setMenu(element){
	var current = element + 1;

	for (i = 1; i < 5; i++){
		if (i == current){
			$(".navbar li[data-slide='"+ i + "'] a").addClass('active');
		} else {
			if ($(".navbar li[data-slide='"+ i + "'] a").hasClass('active')){
				$(".navbar li[data-slide='"+ i + "'] a").removeClass('active');
			}
		}
	}
}

//shift page when open nav in .navbar-bottom
// $(document).ready(function(){
// 	if ($(window).width() <= 768){
// 		$('.navbar-bottom button').click(function(){

// 				$("#slide-2").toggleClass('movingDown');
 
// 		});
// 	}
// });

$('.navbar-bottom button').click(function(){
	if ($(window).width() <= 768){
		if($("nav").hasClass('navbar-bottom')){
			$("#slide-1").toggleClass('movingUp');
		}
		$("#slide-2").toggleClass('movingDown');
	}

});


