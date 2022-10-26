$(function(){

    $('.gnbM_right').on('click',function(){

        $('#gnbMobile').stop().animate({'right':0},300);
        $('.dimBg').stop().fadeIn(300);

    }); //click_mobileOn

    $('.mobileMenuXbt').on('click',function(){

        $('#gnbMobile').stop().animate({'right':-300},300);
        $('.dimBg').stop().fadeOut(300);
    }); 




}); //doc