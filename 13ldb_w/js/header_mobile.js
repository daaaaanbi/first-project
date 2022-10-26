$(function(){

    $('#mobileMenu').on('click',function(){

        $('#gnbM').stop().animate({'right':0},300);
        $('.dimBg').stop().fadeIn(300);
    })

    $('.mobileMenuXbt').on('click',function(){

        $('#gnbM').stop().animate({'right':-300},300);
        $('.dimBg').stop().fadeOut(300);
        $('.gnb-mobile>.depth1M>a').next().stop().slideUp();
    })

    $('.gnb-mobile>.depth1M>a').on('click',function(){

        $('.gnb-mobile>.depth1M>a').next().stop().slideUp();
        $(this).next().stop().slideDown();
    });


}); //doc

