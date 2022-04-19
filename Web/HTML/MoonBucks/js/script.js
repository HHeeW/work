$(function(){
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
});

