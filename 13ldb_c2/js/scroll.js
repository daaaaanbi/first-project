$(function(){

    $(window).window('scroll',function(){

        var scroll = $(this).scrollTop();
        var pos2 = $('.program').offset().top;

        $('.pbg-left').removeClass('on');
        if(scroll>=pos2){
            $('.pbg-left').addClass('on');
        }

  

    })

});