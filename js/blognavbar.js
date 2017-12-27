(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbarbg").css('opacity', '1');
	$(".navbarbg").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbarbg').fadeIn(500);
			} else {
				$('.navbarbg').fadeOut(500);
			}
		});

	
	});

});
  }(jQuery));