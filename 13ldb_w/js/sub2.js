$(function(){

    $('.selL').hover(function(){

        $('.sel-slide').stop().slideDown(200);

    },function(){

        $('.sel-slide').stop().slideUp(200);

    }); //hover 


    $('.sel-slide>li').hover(function(){

        $(this).addClass('on');

    },function(){

        $(this).removeClass('on');

    }); //click




    $('.store-list>ul>li>.store_tit').on('click',function(){

        $('.store-list>ul>li>.store_tit').next().stop().slideUp();
        $(this).next().stop().slideDown();

    }); //click




}); //doc