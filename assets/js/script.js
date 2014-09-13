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
				var gallery_images = $('#portfolio img');
				var gallery_width = gallery_images.width() * gallery_images.length;
				
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
				if ( offset_left > 0 ) {
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
				$('#portfolio .row').stop(false, false).animate({
					left: offset_left
				}, 1500, 'easeInOutQuart');
			}
		}
	});
});
