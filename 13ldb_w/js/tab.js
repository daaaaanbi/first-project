$(function(){

    $('#sub1_tab li').on('click',function(){

        // 탭 활성화
        $('#sub1_tab li').removeClass('on')
        $(this).addClass('on')

        // 컨텐츠 활성화
        var i = $(this).index();
        console.log(i);

        $('.content>ul>li').removeClass('on');
        $('.content>ul>li').eq(i).addClass('on');


    }); //click

}); //doc