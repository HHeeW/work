'use strict';

//mouseover, mouseout  <---> mouseenter, mouseleave

window.onload = function(){
   //let myshop = document.getElementById("myshop");
   let allshop = document.getElementById("all");
   let elem = document.getElementsByClassName('all')[0];
   
   allshop.addEventListener("mouseenter", function(){
        let bar = document.getElementsByClassName('bar');
        allshop.classList.add('first-over');
        for(let i =0; i < 3; i++) {
            allshop.children[i].classList.remove('bar');
            allshop.children[i].classList.add('barover');
        }
        fadeInOut(elem, 'flex');
    });

    elem.addEventListener("mouseleave", function(){
        let barover = document.getElementsByClassName('barover');
        if(barover){
           allshop.classList.remove('first-over');
           for(let i =0; i < 3; i++) {
              allshop.children[i].classList.remove('barover');
              allshop.children[i].classList.add('bar');
           }
           fadeInOut(elem, 'none');
        }   
    });

    

}
let img1= document.getElementById('img1')
let img2= document.getElementById('img2')
function vimg(str){
    img1.src = 'images/' +str+ '.jpg';
    img2.src = 'images/' +str+ '.jpg';
}
function bview(n){
    if(n){
        img2.style.display = 'block';
    }else{
        img2.style.display = 'none';
    }
}


function fadeInOut(elem, disp) {
    if(! elem) return;
    if(disp == 'none') {
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

