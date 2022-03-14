$(function(){   //서브메뉴 호버
    $('nav').hover(function(){
        $(this).find('ul.lnb').fadeToggle();
    });


    $('ul.lnb>li').hover(function(){//서브메뉴의 마우스 올라간 곳이 li 순서값을 찾는다.
        var ind = ($('li').index(this))-4; //li순서값이 모든 li번호로 나오므로 주메뉴 li만큼 빼준다.
        $('ul.gnb').find('li').eq(ind).toggleClass('active');//주메뉴 li의 순서번호에 active 클래스를 마우스를 올리면 넣고 마우스가 빠지면 사라지게 한다.
    });
    
    // slider
    setInterval(slide,3000);

    function slide(){
        $('.slidein').animate({
            'top':'-300px'//-300px위로 민다
        }, 500, function(){
            $('.slidein img:eq(0)').clone().appendTo('.slidein'); //-300px밀려있는 이미지를 복사해서 제일 마지막으로 붙여 넣는다.
            $('.slidein img:eq(0)').remove(); //이미 복사된 -300px에 있는 이미지를 삭제한다.
            $('.slidein').css('top', 0);//스타일 시트 위치값을 0으로 초기화 한다.
        });
    };
    $('.tab-nav>li').click(function(){
        var link = $(this).find('a').attr('href');
        $('.tab-nav>li').removeClass('act');
        $(this).addClass('act');
        $('.tab-content ul').removeClass('act');
        $(link).addClass('act');
    });

    $('.popup').click(function(){
        $('.pop').fadeIn();
    })

    $('.close').click(function(){
        $('.pop').fadeOut();
    })
});