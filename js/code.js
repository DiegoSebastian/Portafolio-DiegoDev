jQuery(document).ready(function($) {
	let altura = $('.nav-main').offset().top

	$(window).on('scroll', function() {
		if($(window).scrollTop() > altura){
			$('.nav-main').addClass('menu-fixed')
		}
		else {
			$('.nav-main').removeClass('menu-fixed')
		}
	})
});