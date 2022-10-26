$(function(){

    $('.pop-up').hide();
    $('.pop-up').fadeIn(500);

    $('.close').click(function(e){
        e.preventDefault();

        $('.pop-up').fadeOut(400);

        $('#overlay').removeClass('blur-in');
    });

    $('a.button').click(function(e){
        e.preventDefault();

        $('.pop-up').fadeOut(400);

        $('#overlay').removeClass('blur-in');
    });


});