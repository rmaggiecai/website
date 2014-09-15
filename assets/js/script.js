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

	});
	
});

//move to page
jQuery(document).ready(function ($) {
	//Cache some variables
	var links = $('.nav').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');
	
	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function goToByScroll(dataslide) {
		// console.log('.slide[data-slide="' + dataslide + '"]');
		var offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;
		
		htmlbody.stop(false, false).animate({
			scrollTop: offset_top
		}, 1500, 'easeInOutQuart');
	}
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	links.click(function (e) {
		e.preventDefault();
		var dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	$('.navigation-slide').click(function (e) {
		e.preventDefault();
		var dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});

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