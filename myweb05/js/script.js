'use strict'

window.onload = function(){
    let myshop = document.getElementById("myshop");
    myshop.addEventListener("mouseover", function(){
        document.getElementsByClassName("myshop")[0].style.display = 'block';
    });
    myshop.addEventListener("mouseout", function(){
        document.getElementsByClassName("myshop")[0].style.display = 'none';
    });
};

$('#myshop').hover(function(){
    $(this).find('.myshop').toggle();
})