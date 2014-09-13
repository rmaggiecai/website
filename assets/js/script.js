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

//navigation
