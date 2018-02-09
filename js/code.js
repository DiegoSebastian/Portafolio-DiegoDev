jQuery(document).ready(function($) {
	// Menú sticky
	let altura = $('.nav-main').offset().top
	$(window).on('scroll', function() {
		if($(window).scrollTop() > altura){
			$('.nav-main').addClass('menu-fixed')
		}
		else {
			$('.nav-main').removeClass('menu-fixed')
		}
	})
	$(window).resize(function(){
		if($(window).width() > 768){
			altura = $('.nav-main').offset().top

			$(window).on('scroll', function() {
				if($(window).scrollTop() > altura){
					$('.nav-main').addClass('menu-fixed')
				}
				else {
					$('.nav-main').removeClass('menu-fixed')
				}
			})
		}
	})


	// Scrolls
	let scrollAbout = $('.about .title').offset().top
	let scrollSkills = $('.skills .title').offset().top
	let scrollWorks = $('.works .title').offset().top
	let scrollContact = $('.contact .title').offset().top
	let scrollHome = $('body').offset().top

	$(window).resize(function(){
		scrollAbout = $('.about .title').offset().top
		scrollSkills = $('.skills .title').offset().top
		scrollWorks = $('.works .title').offset().top
		scrollContact = $('.contact .title').offset().top
		scrollHome = $('body').offset().top
	})
	// Scrolls Header
	$('#btn-about').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollAbout
		}, 700)
	})

	$('#btn-skills').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollSkills
		}, 700)
	})

	$('#btn-work').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollWorks
		}, 700)
	})

	$('#btn-contact').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollContact
		}, 700)
	})
	// Menu sticky scrolls
	$('#btn-about-menu').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollAbout
		}, 700)
	})

	$('#btn-skills-menu').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollSkills
		}, 700)
	})

	$('#btn-work-menu').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollWorks
		}, 700)
	})

	$('#btn-contact-menu').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollContact
		}, 700)
	})

	$('#btn-dev').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollHome
		}, 700)
	})

	// scroll more
	$('#btn-more').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $('main').offset().top
		}, 700)
	})

	// Hammer JS

	let menu = $('#nav-mobile')
	let body = document.body;
	let hammer = new Hammer(body)

	hammer.on('swiperight', function(ev) {
		menu.addClass('active')
	});

	hammer.on('swipeleft', function(ev) {
		menu.removeClass('active')
	});

	$('#nav-mobile a').on('click', function(){
		menu.removeClass('active')
	})
});