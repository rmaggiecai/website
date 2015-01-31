//Set image size on load

$(document).ready(function() {

	//set cover image height
	var setWindowWidth = function() {
		return parseInt($(window).width());
	};
		
	var setWindowHeight = function() {
		return parseInt($(window).height());
	};

});


var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();


$(document).ready(function(){
  if (window.location.pathname == "/"){
		$('#portfolio').slick({
		arrows:true,   
		dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    ]
		});
	}
});

//sticky header
$(document).ready(function($) {
	$(document).scroll(function(){
		// var navHeight = 0;

		// if (window.location.pathname == "/"){

			if ($(document).scrollTop() > 0){
				// console.log("hi");
				$('nav').removeClass('navbar-clear');
			} else {
				$('nav').addClass('navbar-clear');

			}
		//} 

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
				
					offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top-227;

				
			} else {
				offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;
				offset_top = ( dataslide == 2 ) ? offset_top : offset_top+1;
			}

			console.log("scroll: " + offset_top);
			htmlbody.stop(false, false).animate({
				scrollTop: offset_top
			}, 1500, 'easeInOutQuart');
		}
		
		//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
		links.click(function (e) {
			if (this.id !== "contactMe"){
				// console.log("go");
				e.preventDefault();
				var dataslide = $(this).attr('data-slide');
				goToByScroll(dataslide);
				// setMenu(dataslide-1);
				if ($(window).width() <= 768){
					$(".navbar-collapse").collapse('hide');
					$("#slide-1").toggleClass('movingDown');
					$("#slide-1 #title-info").toggleClass('movingDown');
					if ($(".navbar-fixed-top").hasClass('navbar-clear'))
						$(".navbar-clear").toggleClass('darker');
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
				console.log("element " + element + "top: " + $(element).offset().top);
			});

			console.log("location: " + location);

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
	console.log(current);

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

$('.navbar-fixed-top button#toggle-btn').click(function(){
	if ($(window).width() <= 768){
		// $("#slide-1").toggleClass('movingDown');
		// $("#slide-1 #title-info").toggleClass('movingDown');
		if ($(".navbar-fixed-top").hasClass('navbar-clear'))
			$(".navbar-clear").toggleClass('darker');
	} 

});


