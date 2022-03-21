$(function(){
    $('nav').hover(function(){
        $('.lnbbox').fadeToggle();
    });


    $('.lnb>li').hover(function(){
        var ind = ($('li').index(this))-4;
        $('.gnb').find('li').eq(ind).toggleClass('active');
    });

    setInterval(slide, 3000);

});
function slide(){
    $('.slidein').animate({
        'left': '-1200px'
    }, 1000, function(){
        $('.slidein img:eq(0)').clone().appendTo('.slidein');
        $('.slidein img:eq(0)').remove();
        $('.slidein').css('left', 0);
    });
};