$(document).ready(function () {

    function scrollTopAnimation(goTop) {
        $('html, body').animate({
            scrollTop: goTop
        }, 800);
    }
    
    //navigation scroll down
    $('.nav-links').click(function (event) {
        event.preventDefault();
        var getLink = $(this).attr('href'),
            goTop = $(getLink).offset().top;
        
        scrollTopAnimation(goTop);
    });
    
    //slide down jumbotron header when navigation is active
    $('.navbar-toggle').click(function () {
        var $hasCollapsed = $('.navbar-toggle').hasClass('collapsed'),
            $jumboContainer = $('.jumbotron').find('.container'),
            $windowWidth = $(window).width();
        
        if ($hasCollapsed && ($windowWidth < 768)) {
            $jumboContainer.css('min-height', 'calc(100vh + 150px)');
            $('.motto').css('transform', 'translateY(50%)');
            $('.scroll-down-button').css('bottom', '0');
        } else {
            $jumboContainer.css('min-height', 'calc(100vh)');
            $('.scroll-down-button').css('bottom', '8rem');
            $('.motto').css('transform', 'translateY(-50%)');
        }
    });
    
    //hide arrow after load website
    $('.scroll-top').hide();
    
    //scroll website top from bottom-right arrow
    $('.scroll-top').click(function () {
        var goTop = $('html, body').offset().top;
        scrollTopAnimation(goTop);
    });

    //visibility bottom-right arrow
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    
    $('.scroll-down').click(function (e) {
        e.preventDefault();
        var scrollNextSection = $('.jumbotron')['0'].scrollHeight;
        
        scrollTopAnimation(scrollNextSection);
    });
});
