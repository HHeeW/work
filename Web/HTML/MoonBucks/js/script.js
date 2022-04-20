$(function(){
    let ct = 1; //카운트

    const imgLength = $('.imgSlidein').children().length;
    let li = '';
    for(let i = 0; i < imgLength; i++){
        if(i == 1){
            li +='<li class="act"></li>';
        }else{
            li += '<li></li>';
        }
    }


    //imgSlideInWidth의 크기
    const imgSlideInWidth = $('.imgSlideIn').width();
    //화면의 크기
    const scrWidth = $(window).width();
    //(imgSlideIn - 화면의 크기)2
    const gap = 


    $('.imgSlider').hide();
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm,.input-search').toggleClass('act');
    });

    $('.gnb>li').hover(function(){
        $(this).find('.lnb').slideToggle();
    });

    $('.mobile-nav-box>li').click(function(){
        if($(this).find('.fa-solid').hasClass('fa-angle-down')){
            $(this).find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
        }else{
            $(this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
        $(this).find('.mobile-lnb').slideToggle();
    });


    
    $('.btn-box>.fa-bars').click(function(){
        $('.fadeblack').css('right', '0%');
        $('.wrapperbox').css('left', '-70%');
    });
    $('.xclose').click(function(){
        $('.wrapperbox').css('left', '0%');
        $('.fadeblack').css('right', '-100%');
    });


    $('.imgs').click(function(e){
        e.preventDefault();
        $('.imgSlider').slideToggle("fast", function(){
           if($(this).css('display') == 'none'){
              $('.imgs').find('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
           }else{
              $('.imgs').find('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
           }
        });
    });
  
    $('.notice-slider').slick({
       autoplay: true,
       autoplayspeed: 2000,
       vertical: true,
       arrows: false
    });
  
    $('.summer-bg').mouseover(function(){
      $(this).find('.sLeftIn, .sRightIn').css('animation-play-state', 'running');
    })

    let otop = 0, stop = 0;
    $(window).scroll(function(){
        stop = $(window).scrollTop();
        otop = $('.summer-bg').offset().top;
        if(stop > 100 ){
            $('.sLeftIn, .sRightIn').css('animation-play-state', 'running');
        }
        
    })
    $('.next').click(function(e){
        e.preventDefault();
        mySlider(-1)
    });
    $('.prev').click(function(e){
        e.preventDefault();
        mySlider(1)
    })

    setInterval(mySlider, 3000);

    function mySlider(idx=-1){
        let SlideLeft = '50%';
        if(idx ==1){
            SlideLeft = '50%';
        }else{
            SlideLeft = '0';
        }
        $('.imgSlidein').animate({
            left: '50%'
          }, 0, function(){
            myCallBack();
            });


      function myCallBack(){
        
              $('.imgSlidein div').removeClass('opacity-1');
              $('.imgSlidein div:eq(0)').clone().appendTo('.imgSlidein');
              $('.imgSlidein div:eq(0)').remove();
              $('.imgSlidein div:eq(1)').addClass('opacity-1');
              $('.imgSlideIn').css('left', 0);
              
  
              ct++;
              if(ct == 3) ct = 0;
              li = '';
              for(i=0;i<imgLength;i++){
                  if(i == ct){
                      li +='<li class="act"></li>';
                  }else{
                      li += '<li></li>';
                  }
              }
              $('.page').html(li);
          };
      }
});

