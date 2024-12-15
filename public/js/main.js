$(document).ready(function () {

    $("#owlMain").owlCarousel({
        items: 1,
        rewind: true,
        dots: false,
        nav: false,
        autoplay: true,
        smartSpeed: 3500,
        autoplayTimeout: 4000,
		animateOut: 'fadeOut',
		lazyLoad: true
	});

	$('#productSlider').owlCarousel({
		items: 1,
		margin: 13,
		loop: true,
		nav: true,
		navText: ['<span></span>', '<span></span>'],
		dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            }
        }
    });
    
    $('#referencesSlider').owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            }
        }
    });

    if (getCookie("CDRCookie") == null) {
        $('#cookieAcceptBar').fadeIn();
    }
});

function setCookie(name, value, day) {
    var expires = "";
    if (day) {
        var date = new Date();
        date.setTime(date.getTime() + (day * 1000 * 60 * 60 * 24));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

$("#allowbtn").click(function () {
    $('#cookieAcceptBar').fadeOut();
    setCookie('CDRCookie', "true", 20);
});

$("#declinebtn").click(function () {
    $('#cookieAcceptBar').fadeOut();
    setCookie('CDRCookie', "true", 1);
});