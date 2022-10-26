$(function(){

    $('.dropdown').hover(function(){

        $('.dropdown-menu').stop().slideDown(200);

    }, function(){

        $('.dropdown-menu').stop().slideUp(200);

    });


}); //doc