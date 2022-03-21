$(function(){
    $('nav').hover(function(){
       $(this).find('ul.lnb').fadeToggle();
    });
 
    $('ul.lnb>li').hover(function(){  //서브메뉴의 마우스 올라간 곳의 li 순서값을 찾는다.
       var ind = ($('li').index(this))-4;  //li순서값이 모든 li번호로 나오므로 주메뉴 li만큼 빼준다. 
       $('ul.gnb').find('li').eq(ind).toggleClass('active');  //주메뉴 li의 순서번호에 acitve 클래스를 마우스를 올리면 넣고 마우스가 빠지면 사라지게 한다. 
    });

    setInterval(slide, 3000);

    function slide(){
       $('.slidein').animate({
          'left': '-1200px'   //-300px 위로 민다
       }, 1000, function(){
          $('.slidein img:eq(0)').clone().appendTo('.slidein');  //-300픽셀 밀려있는 이미지를 복사해서 제일 마지막으로 붙여 넣는다. 
          $('.slidein img:eq(0)').remove();  //이미 복사된 -300 에 있는 이미지는 삭제한다. 
          $('.slidein').css('left', 0);  //스타일시트 위치값을 0으로 초기화 한다. 
       });
    };

});