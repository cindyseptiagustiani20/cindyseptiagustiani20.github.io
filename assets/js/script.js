$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();

        $('#sun').css({
            "transform": "translateY(" + scroll * 0.8 + "px)"
        });

        $('#mountain1').css({
            "transform": "translateY(" + scroll / 2 + "px)"
        });

        $('#mountain2').css({
            "transform": "translate(0px," + scroll / 2.5 + "px)"
        });

        $('#mountain3').css({
            "transform": "translate(0px," + scroll / 5 + "px)"
        });

        $('#welcome_text').css({
            "transform": "translate(0px," + scroll / 4 + "px)"
        });

        var scrollDistance = $(window).scrollTop();
    if ($('#home').position().top <= scrollDistance) {
        $('.nav-menu ul li a.active').removeClass('active');

        $('.nav-menu ul li a').eq(0).addClass('active');

        // set logo h1 color transparent
        $('.logo > h1').css({
            "color": "transparent"
        });
    }
    if ($('#about_me').position().top <= scrollDistance) {
        $('.nav-menu ul li a.active').removeClass('active');

        $('.nav-menu ul li a').eq(1).addClass('active');

        $('.logo > h1').css({
            "color": "white"
        });
    }
    if ($('#skill').position().top <= scrollDistance) {
        $('.nav-menu ul li a.active').removeClass('active');

        $('.nav-menu ul li a').eq(2).addClass('active');

        $('.logo > h1').css({
            "color": "white"
        });
    }

    if ($('#contact_me').position().top <= scrollDistance) {
        $('.nav-menu ul li a.active').removeClass('active');

        $('.nav-menu ul li a').eq(3).addClass('active');

        $('.logo > h1').css({
            "color": "white"
        });
    }
    });
    $('.nav-menu ul li a').click(function () {
        $('.nav-menu ul li a').removeClass('active');
        $(this).addClass('active');
    });

}).scroll();