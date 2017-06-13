$(document).ready(function () {

    function scrollTopAnimation(goTop) {
         $('html, body').animate({
            scrollTop: goTop
        }, 800);
    }
    
    //navigation scroll down
    $('.nav-links').click(function (event) {
        event.preventDefault();
        const getLink = $(this).attr('href'),
            goTop = $(getLink).offset().top;
            scrollTopAnimation(goTop);
    });
    
    //hide arrow after load website
    $('.scroll-top').hide();
    
    //scroll website top from bottom-right arrow
    $('.scroll-top').click(function () {
        const goTop = $('html').offset().top;
        scrollTopAnimation(goTop);
    });

    //visibility bottom-right arrow
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) $('.scroll-top').fadeIn();
        else $('.scroll-top').fadeOut();
    });
});
