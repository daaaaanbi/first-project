

$(function(){

    $('#topBtn').click(function(){

        $('html,body').animate({scrollTop:0},600);
        return false;

    }); //top scroll


    $(window).on('scroll',function(){

        var scroll = $(this).scrollTop();
        var po1 = $('.mainVisual').offset().top;
        var baseline = 500;
        
        if(scroll>po1){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }

        if(scroll<=po1){
            $('#topBtn').addClass('on');
        }else{
            $('#topBtn').removeClass('on');
        }

        var po2 =$('.cardL').offset().top;

        if(scroll>po2-baseline){
            $('.circleBg1').addClass('on');
        }else{
            $('.circleBg1').removeClass('on');
        }

        var po3 =$('.cardR').offset().top;

        if(scroll>po3-baseline){
            $('.circleBg2').addClass('on');
        }else{
            $('.circleBg2').removeClass('on');
        }

        var po4 =$('.sec3').offset().top;

        if(scroll>po4-500){
            $('.circleBg3').addClass('on');
        }else{
            $('.circleBg3').removeClass('on');
        }

        console.log()
    
    
    }); //scroll


}); //doc