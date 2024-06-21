$(document).ready(function () {
    var $jumpingText = $('#jumpingText');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $jumpingText.css({
                'display': 'none'
            });
        } else {
            $jumpingText.css({
                'display': 'block'
            });
        }
    });

    $('.to-main-content').click(function () {
        $('.main-content').toggleClass("slide-right");
        $('#navigation').toggleClass("slide-right");

        // show main content
        $('.main-content').css({
            'visibility': "visible"
        });

        // hide navigation
        $('#navigation').css({
            'visibility': "hidden"
        });
    });

    $("#navigation-link").click(function () {
        $('.main-content').toggleClass("slide-right");
        $('#navigation').toggleClass("slide-right");

        // hide main-content
        $('.main-content').css({
            'visibility': "hidden"
        });

        // show navigation
        $('#navigation').css({
            'visibility': "visible"
        });
    });

    $('.tabs').tabs();
    var slider = $('.slider').slider({
        duration: 5,
    });
    
    $('.slider').slider('pause');

    $('.indicator-item').click(function(){
        $('.slider').slider('pause');
    });

    

    $('.materialboxed').materialbox();
    $(".dropdown-trigger").dropdown();
    $('.scrollspy').scrollSpy();
});
