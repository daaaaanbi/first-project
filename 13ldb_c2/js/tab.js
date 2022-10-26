$(function(){

    $('.fo-con .fc-tab button').on('click',function(){

        $('.fo-con .fc-tab button').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();
        $('.tabcontent').removeClass('on');
        $('.tabcontent').eq(i).addClass('on');

    });

});