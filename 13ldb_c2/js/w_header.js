$(function(){

    $('#gnb').hover(function(){

        $('.twoDbg').stop().slideDown(200);
        $('.twoD').stop().slideDown(200);
        $('#header').addClass('bbshow');


    }, function(){

        $('.twoDbg').stop().slideUp(200); 
        $('.twoD').stop().slideUp(200);
        $('#header').removeClass('bbshow');




    });//hover


    $('#gnb .oneD').hover(function(){

        $(this).addClass('on');
        $(this).next().addClass('on');


    }, function(){

        $(this).removeClass('on');
        $(this).next().removeClass('on');


    });



});//doc