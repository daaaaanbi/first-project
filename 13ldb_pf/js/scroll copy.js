$(function(){

    var pos1, pos2, pos3, pos4;
    var winH;

    $(window).on('resize',matchHeight);
    function matchHeight(){
        winH = $(window).height();
        $('.wrap>section').height(winH);

        pos1=$('.wrap>section').eq(0).offset().top;
        pos2=$('.wrap>section').eq(1).offset().top;
        pos3=$('.wrap>section').eq(2).offset().top;
        pos4=$('.wrap>section').eq(3).offset().top;
    }
    matchHeight();

    // sec1 네비게이션 클릭 효과
    $('.topBtn').on('click',function(){

        var i = $(this).index();
        var target = $('.wrap>section').eq(i).offset().top;

        // 최상위 태그인 html만 적어줘도 무관하지만, 크로스브라우징 문제로 인하여 body태그까지 적어줌.         
        $('html,body').stop().animate({'scrollTop':target},1000);
        // scrollTop - 스크롤을 일으키는 애니메이션
    }); //click


    // Top 버튼 클릭 효과
    // $('.topBtn').on('click',function(){
    //     $('html,body').animate({scrollTop:0},500);
    //     return false
    // }); //click


    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();

        // intro 배경 텍스트 스크롤 효과
        if(scroll>0){
            $('.bg-txt').addClass('slideDown')
        }else{
            $('.bg-txt').removeClass('slideDown')
        }

        if(scroll<=pos1){
            $('.topBtn').addClass('off')
        }else{
            $('.topBtn').removeClass('off')
        }

        // 로고 스크롤 효과
        if(scroll>=pos2 && scroll<pos3){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }

        if(scroll>=pos4){
            $('header').addClass('on');
        }
    }); //scroll


});