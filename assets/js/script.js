//Set image size on load

$(document).ready(function() {

	//set cover image height
	var setWindowWidth = function() {
		return parseInt($(window).width());
	};
		
	var setWindowHeight = function() {
		return parseInt($(window).height());
	};

	$('#slide-1').height(setWindowHeight);
	$('#startImage').height(setWindowHeight);

});

//set my work section width
$(function() {
	var pause = 50; // will only process code within delay(function() { ... }) every 100ms.
	$(window).resize(function() {
		delay(function() {
				var gallery_images = $('#portfolio figure');
				var gallery_width = gallery_images.width() * gallery_images.length + 20;
				
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
		
		if ( $(this).hasClass('inactive') )
			return;
		
		var slide = null;
		// var datasheet = $('.nav > li.active').data('slide');
		// var offset_top = false;
		var offset_left = false;
		
		
		switch( $(this).attr('id') ) {
			case 'left':
				offset_left = $('#portfolio .row').offset().left + 452;
				if ( offset_left >= 0 ) {
					offset_left = '0px';
				}



				break;
			case 'right':
				offset_left = $('#portfolio .row').offset().left - 452;
				if ( offset_left < $('body').width() - $('#portfolio .row').width() ) {
					offset_left = $('body').width() - $('#portfolio .row').width();
				}
				
				break;
		}
				
		if ( offset_left != false ) {
			if ( $('#portfolio .row').width() != $('body').width() ) {
				
				($( "#portfolio .row" ).animate({
				    left: offset_left
				  }, 1500, 'easeInOutQuart' ))
				// $('#portfolio .row').stop(false, false).animate({
				// 	left: "+=50"
				// }, 1500, 'easeInOutQuart');
			}
		}
		checkButtonStyle($('#portfolio .row'), offset_left);
	});

});

function buttonStyle( button,active ){
	console.log("buttonStyle");
	if (active) 
		$(button).removeClass('inactive');
	else 
		$(button).addClass('inactive');
};

function checkButtonStyle( rowPlacement, offSet ){
	
	console.log(rowPlacement.css('left'));
	console.log(offSet);
	var placement =parseInt(rowPlacement.css('left'));
	if (offSet != "0px")
		placement += offSet;

	
	if (offSet =="0px"){

		buttonStyle($('#controls #left'),false);
		buttonStyle($('#controls #right'),true);
	} else {

		buttonStyle($('#controls #left'),true);
		// console.log($(rowPlacement).width());
		// console.log(placement);

		if ($(window).width() >= rowPlacement.width() + offSet)
			buttonStyle($('#controls #right'),false);
		else 
			buttonStyle($('#controls #right'),true);

	}
};

//sticky header
$(document).ready(function($) {
	$(document).scroll(function(){
		var navHeight = $(window).height() - 70;
		if ($(document).scrollTop() >= navHeight){
			$('nav').addClass("navbar-fixed-top");
			$('nav').removeClass('navbar-bottom');
			$('#contactMe button').removeClass('btn-clear');
			$('#contactMe button').addClass('btn-primary');
		} else {
			$('nav').removeClass("navbar-fixed-top");
			$('nav').addClass('navbar-bottom');
			$('#contactMe button').addClass('btn-clear');
			$('#contactMe button').removeClass('btn-primary');
		}

		// $.when($(document).scrollTop() < navHeight).then(function(){
		// 	$('nav').removeClass("sticky");
		// });

	});
	
});

// $(window).scroll(function() {
// 	if ($(this).scrollTop() > 1){  
//     $('nav').addClass("sticky");
//   }
//   else{
//     $('nav').removeClass("sticky");
//   }
// });