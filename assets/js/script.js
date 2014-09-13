//Set image size on load

$(document).ready(function() {

	//set cover image height
	var setWindowWidth = function() {
		return parseInt($(window).width());
	};
		
	var setWindowHeight = function() {
		return parseInt($(window).height());
	};

	// $('.slide-1').width(setWindowWidth);
	$('#slide-1').height(setWindowHeight);
	$('#startImage').height(setWindowHeight);



	// $('#slide-3 img').each(function(index, element) {
	// 	var time = new Date().getTime();
	// 	var oldHref = $(this).attr('src');
	// 	var myImg = $('<img />').attr('src', oldHref + '?' + time );
		
	// 	myImg.load(function(e) {
	// 		img_loaded += 1;;
	// 		if ( img_loaded == $('#slide-3 img').length ) {
	// 			$(function() {
	// 				var pause = 10;
	// 				$(document).scroll(function(e) {
	// 					delay(function() {
							
	// 						var tops = [];
							
	// 						$('.story').each(function(index, element) {
	// 							tops.push( $(element).offset().top - 200 );
	// 						});
				
	// 						var scroll_top = $(this).scrollTop();
							
	// 						var lis = $('.nav > li');
							
	// 						for ( var i=tops.length-1; i>=0; i-- ) {
	// 							if ( scroll_top >= tops[i] ) {
	// 								menu_focus( lis[i], i+1 );
	// 								break;
	// 							}
	// 						}
	// 					},
	// 					pause);
	// 				});
	// 				$(document).scroll();
	// 			});
	// 		}
	// 	});
	// });


});

$(function() {
	var pause = 50; // will only process code within delay(function() { ... }) every 100ms.
	$(window).resize(function() {
		delay(function() {
				var gallery_images = $('#slide-3 img');
				
				var images_per_row = 0;
				if ( gallery_images.length % 2 == 0 ) {
					images_per_row = gallery_images.length / 2;
				} else {
					images_per_row = gallery_images.length / 2 + 1;
				}
				
				var gallery_width = $('#slide-3 img').width() * $('#slide-3 img').length;
				gallery_width /= 2;
				if ( $('#slide-3 img').length % 2 != 0 ) {
					gallery_width += $('#slide-3 img').width();
				}
				
				$('#slide-3 .row').css('width', gallery_width );
				
				var left_pos = $('#slide-3 .row').width() - $('body').width();
				left_pos /= -2;
				
				$('#slide-3 .row').css('left', left_pos);
			
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