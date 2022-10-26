$(function(){


    // sc-box img click 이벤트
    $('.solution .sol-con .sc-box>ul>li').on('click',function(){
        $('.solution .sol-con .sc-box>ul>li').eq(1).css({'opacity':1});
    }); //click 

    // sc-box scroll 이벤트
    $(window).on('scroll',function(){

        var scroll = $(this).scrollTop();
        var pos1 = $('.solution').offset().top;
        var pos3 = $('.fo-bottom').offset().top;
        var pos4 = $('.news-notice').offset().top;
        

        $('.sc-box').removeClass('on');
        if(scroll>=pos1-300){
            $('.sc-box').addClass('on');
        }

        $('.fbc-box').removeClass('on');
        if(scroll>=pos3-400){
            $('.fbc-box').addClass('on');
        }

        $('.news-notice').removeClass('on');
        if(scroll>=pos4-450){
            $('.news-notice').addClass('on');
        }




    }); //scroll

});