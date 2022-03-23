'use strict'

window.onload = function(){
    // let myshop = document.getElementById("myshop");
    let allshop = document.getElementById("all");
    let elem = document.getElementsByClassName('all')[0];
    
    allshop.addEventListener("mouseover", function(){
        let bar = document.getElementsByClassName('bar');
        allshop.classList.add('first-over');
        for(let i = 0; i < 3; i++){
            allshop.children[i].classList.remove('bar');
            allshop.children[i].classList.add('barover');
        }
        
    });
    
}
function fadeInOut(elem, disp){
    if(!elem) return;
    if(disp == 'none'){
        elem.classList.remove('fadeIn');
        elem.classList.add('fadeOut');
        elem.style.display = disp;
    }else{
        elem.classList.remove('fadeOut');
        elem.style.opacity = 0;
        elem.style.display = disp;
        elem.classList.add('fadeIn');
    }
}
