$(function(){

    $('.toggle-menu').click(function(){
        if($('.toggle-menu').hasClass('on')){
            $('.toggle-menu').removeClass('on');
            $('.overlay-menu-wrap').fadeOut(500);
        }else{
            $('.toggle-menu').addClass('on');
            $('.overlay-menu-wrap').fadeIn(500);
        }
    }); //toggle-menu click
    

    $('.menu-wrap ul li a').click(function(){
        $('.overlay-menu-wrap').fadeOut(500);
        $('.toggle-menu').removeClass('on');
    }); //menu-wrap click

    $('.tab-menu li').on('click',function(){

        $('.tab-menu li').removeClass('on')
        $(this).addClass('on')

        var i = $(this).index();
        $('.sec5-con-wrap>div').removeClass('on');
        $('.sec5-con-wrap>div').eq(i).addClass('on');

    }); //sec5-tab메뉴 활성화

    

}); //doc