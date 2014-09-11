//Set image size on load

$(document).ready(function() {
	var setWindowWidth = function() {
		return parseInt($(window).width());
	};
		
	var setWindowHeight = function() {
		return parseInt($(window).height());
	};

	// $('.slide-1').width(setWindowWidth);
	$('#slide-1').height(setWindowHeight);
	$('#startImage').height(setWindowHeight);

});