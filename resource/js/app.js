$(document).ready(function () {

	/*---------Sticky Navigation ---------------*/

	//select the section when the section appear t
	$(".section-feature").waypoint(function (direction) {
		//check the directoin goes doen or up
		if (direction === "down") {
			//add class to the nav
			$("nav").addClass("sticky");
		} else {
			//remove the class
			$("nav").removeClass("sticky");
		}
	}, {
		//offset triger reach the section
		offset: '80px'
	});


	/*--------- Scroll Animation ---------------*/

	$(".js-plan").click(function () {
		//animate object to create aniamtion and time
		$("html,body").animate({
			scrollTop: $(".section-sign-up").offset().top
		}, 1000);
	});

	$(".js-feature").click(function () {
		//animate object to create aniamtion and time
		$("html,body").animate({
			scrollTop: $(".section-feature").offset().top
		}, 500);
	});

	/********************************************** */

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

	/*******************************************************/

	$('.js-wp-1').waypoint(function (direction) {
		$(".js-wp-1").addClass("animated fadeIn");
	}, {
		offset: "80%",
	});

	$('.js-wp-2').waypoint(function (direction) {
		$(".js-wp-2").addClass("animated fadeInLeft");
	}, {
		offset: "80%",
	});


	$('.js-wp-3').waypoint(function (direction) {
		$(".js-wp-3").addClass("animated fadeInUp");
	}, {
		offset: "80%",
	});


	$('.js-wp-4').waypoint(function (direction) {
		$(".js-wp-4").addClass("animated pulse");
	}, {
		offset: "80%",
	});

	//mobiel icon==================================
	$(".mobile-icon").click(function () {
		const icon = $(".mobile-icon i");
		$(".main-nav").slideToggle(200);
	})

//Google Map intrigation
	var map = new GMaps({
		el: '.map',
		lat: 23.8071296,
		lng: 90.3711869,
		zoom: 15,
	});
	//map marker
	map.addMarker({
		lat: 23.8059086,
		lng: 90.3653272,
		title: 'Omnifood',
		infoWindow: {
			content: '<h3>Omnifood</h3>'
		}
	});

});