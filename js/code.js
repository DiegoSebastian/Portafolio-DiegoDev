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

		if($(window).width() < 992){
			// Hammer JS

			menu = $('#nav-mobile')
			body = document.body;
			hammer = new Hammer(body)
	
			hammer.on('swiperight', function(ev) {
				menu.addClass('active')
			});

			hammer.on('swipeleft', function(ev) {
				menu.removeClass('active')
			});
	
			$('#nav-mobile a').on('click', function(){
				menu.removeClass('active')
			})
		}
	})

	if($(window).width() < 992){
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
		}


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

	// Scrolls mobile
	$('#btn-about-menu-mobile').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollAbout
		}, 700)
	})

	$('#btn-skills-menu-mobile').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollSkills
		}, 700)
	})

	$('#btn-work-menu-mobile').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollWorks
		}, 700)
	})

	$('#btn-contact-menu-mobile').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: scrollContact
		}, 700)
	})

	$('#btn-dev-mobile').on('click', function(e) {
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


	// ANIMACIONES
	window.sr = ScrollReveal({ reset: true });
	sr.reveal('.about', {
		duration: 600,
		origin: 'bottom',
		distance: '100px'
	});
	sr.reveal('.about .title', {
		duration: 600,
		origin: 'top',
		distance: '200px'
	});
	sr.reveal('.skills', {
		duration: 600,
		origin: 'bottom',
		distance: '100px'
	});
	sr.reveal('.works .title', {
		duration: 600,
		origin: 'top',
		distance: '200px'
	});
	sr.reveal('.work-text', {
		duration: 600,
		origin: 'right',
		distance: '100px'
	});
	sr.reveal('.work-image', {
		duration: 600,
		origin: 'left',
		distance: '100px'
	});
	sr.reveal('.contact', {
		duration: 600,
		origin: 'bottom',
		distance: '100px'
	});
	sr.reveal($('.contact .contact-container:even'), {
		duration: 600,
		origin: 'left',
		distance: '200px'
	});
	sr.reveal($('.contact .contact-container:odd'), {
		duration: 600,
		origin: 'right',
		distance: '200px'
	});
	sr.reveal('.redes-footer', {
		duration: 600,
		origin: 'bottom',
		distance: '100px'
	});
	sr.reveal('.web-dev', {
		duration: 600,
		origin: 'top',
		distance: '200px'
	});
	sr.reveal('.idioma', {
		duration: 600,
		origin: 'left',
		distance: '200px'
	});
	sr.reveal('.SW', {
		duration: 600,
		origin: 'right',
		distance: '200px'
	});
});