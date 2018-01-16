/*$(document).ready(function() {
	$('#nav-icon').click(function() {
	    $(this).toggleClass('open');
	    $('.dropdown_mobile').toggleClass('show');
	    $('.overlay').toggleClass('show');
	});
});*/

$(document).ready(function() {

	var $overlay = $('.overlay');
	$('#nav-icon, .overlay').click(function() {
	    $(this).toggleClass('open');
	    $('.dropdown_mobile').toggleClass('show');
	    $overlay.toggleClass('show');
	});
});

$(document).ready(function() {
	$('.image-link').magnificPopup({
	    type: 'image',
	    gallery:{
	    enabled:true,
	    navigateByImgClick: true,
	    tPrev: 'Previous (Left arrow key)', 
		tNext: 'Next (Right arrow key)', 
		tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
	  }
	});
});
