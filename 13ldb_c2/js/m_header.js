$(function(){

    $('.mobileMenu').on('click',function(){

        $('#gnbM').stop().animate({'right':0},300);
        $('.dimdBg').stop().fadeIn(300);

    });

    $('.mobileMenuXbt').on('click',function(){

        $('#gnbM').stop().animate({'right':-300},300);
        $('.dimdBg').stop().fadeOut(300);
        $('.gnbDiv>a').next().stop().slideUp();


    });

    $('.gnbDiv>a').on('click',function(){

        $('.gnbDiv>a').next().stop().slideUp();
        $(this).next().stop().slideDown();


    });




});