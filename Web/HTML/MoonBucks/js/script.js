$(function(){
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


    setInterval(mySlider, 1000);


});

function mySlider(){
  $('.imgSlidein').animate({
    left: '50%'
  }, 500, function(){
    $('.imgSLidein>div').removeClass('opacity-1');
    $('.imgSlidein>div:first-child').clone().appendTo('.imgSlidein');
    $('.imgSlidein>div:first-child').remove();
    $('.imgSlideIn').css('left', 0);
    
    $('.imgSLidein div:eq(1)').addClass('opacity-1');
  });
}