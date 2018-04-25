 $(function(){
    $('.page-scroll a').bind('click', function(){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        
    });

 })
$(window).scroll(function(){

    var HT = $('.counter').offset().top,
        HH = $('.counter').outerHeight(),
        WH = $(window).height(),
        WS = $(this).scrollTop();
   if (WS > (HT+HH-WH)){
    

     $('.counter-count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
       $('.counter-count').removeClass('counter-count').addClass('counted');
    }
});



