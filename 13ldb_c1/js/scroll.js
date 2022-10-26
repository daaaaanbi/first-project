$(function(){
    $('aside.btn_top').on('click',function(){

        var top = $('header').offset().top;

        $('html,body').stop().animate({'scrollTop':top},1000);

    }); //click

}); //doc