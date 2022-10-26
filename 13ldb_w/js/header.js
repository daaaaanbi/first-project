$(function(){

    $('#gnb').hover(function(){
        
        
        $('.depth2').stop().slideDown(200);
        $('header').addClass('bbshow');
        $('.twoDbg').stop().slideDown(200);
    },function(){

        $('.depth2').stop().slideUp(200);
        $('header').removeClass('bbshow');
        $('.twoDbg').stop().slideUp(200); 
    }) //slide

    $('.depth1>a').hover(function(){

        $(this).addClass('on')


    },function(){

        $(this).removeClass('on')
    })

    $('.depth2>li>a').hover(function(){

        $(this).addClass('on')
    },function(){

        $(this).removeClass('on');
    })

    

}) //doc

