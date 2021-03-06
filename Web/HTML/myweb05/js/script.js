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
function select1(e){
    let pr1 = document.getElementById("pr1");
    let pr2 = document.getElementById("pr2");
    // console.log(pr1.options[pr1.selectedIndex].value);
    // let pr1_select =pr1.options[pr1.selectedIndex].value;
    // let select1 = pr1_select.split(' ');
    let select1 = pr1.options[pr1.selectedIndex].value.split(' ');
    // console.log(select1[0]);
    document.getElementById('total').innerHTML = '';
    document.getElementById('total-price').innerHTML = 0;
    pr2.options.length  = 0;
    
    let jy14K = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
        {key: '15.5cm+2.5cm||0||14K ????????? ??????', val: '15.5cm+2.5cm'},
        {key: '16.5cm+2.5cm||0||14K ????????? ??????', val: '16.5cm+2.5cm'},
        {key: '17.5cm+2.5cm||3000||14K ????????? ??????', val: '15.5cm+2.5cm (+3,000???)'},
        {key: '18.5cm+2.5cm||6000||14K ????????? ??????', val: '15.5cm+2.5cm (+6,000???)'},
        {key: '19.5cm+2.5cm||9000||14K ????????? ??????', val: '15.5cm+2.5cm (+9,000???)'},
    ];
    let jp14K = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
        {key: '15.5cm+2.5cm||0||14K ?????? ??????', val: '15.5cm+2.5cm'},
        {key: '16.5cm+2.5cm||0||14K ?????? ??????', val: '16.5cm+2.5cm'},
        {key: '17.5cm+2.5cm||3000||14K ?????? ??????', val: '15.5cm+2.5cm (+3,000???)'},
        {key: '18.5cm+2.5cm||6000||14K ?????? ??????', val: '15.5cm+2.5cm (+6,000???)'},
        {key: '19.5cm+2.5cm||9000||14K ?????? ??????', val: '15.5cm+2.5cm (+9,000???)'},
    ];
    let jw14K = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
        {key: '15.5cm+2.5cm||0||14K ????????? ??????', val: '15.5cm+2.5cm'},
        {key: '16.5cm+2.5cm||0||14K ????????? ??????', val: '16.5cm+2.5cm'},
        {key: '17.5cm+2.5cm||3000||14K ????????? ??????', val: '15.5cm+2.5cm (+3,000???)'},
        {key: '18.5cm+2.5cm||6000||14K ????????? ??????w', val: '15.5cm+2.5cm (+6,000???)'},
        {key: '19.5cm+2.5cm||9000||14K ????????? ??????', val: '15.5cm+2.5cm (+9,000???)'},
    ];
    // *****************18K*****************
    let jy18K = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
        {key: '15.5cm+2.5cm||41900||18K ????????? ??????', val: '15.5cm+2.5cm (+41,900???)'},
        {key: '16.5cm+2.5cm||41900||18K ????????? ??????', val: '16.5cm+2.5cm (+41,900???)'},
        {key: '17.5cm+2.5cm||45900||18K ????????? ??????', val: '15.5cm+2.5cm (+45,900???)'},
        {key: '18.5cm+2.5cm||49900||18K ????????? ??????', val: '15.5cm+2.5cm (+49,900???)'},
        {key: '19.5cm+2.5cm||53900||18K ????????? ??????', val: '15.5cm+2.5cm (+53,900???)'},
    ];
    let jp18K = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
        {key: '15.5cm+2.5cm||41900||18K ?????? ??????', val: '15.5cm+2.5cm (+41,900???)'},
        {key: '16.5cm+2.5cm||41900||18K ?????? ??????', val: '16.5cm+2.5cm (+41,900???)'},
        {key: '17.5cm+2.5cm||45900||18K ?????? ??????', val: '15.5cm+2.5cm (+45,900???)'},
        {key: '18.5cm+2.5cm||49900||18K ?????? ??????', val: '15.5cm+2.5cm (+49,900???)'},
        {key: '19.5cm+2.5cm||53900||18K ?????? ??????', val: '15.5cm+2.5cm (+53,900???)'},
    ];
    let jw18K = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
        {key: '15.5cm+2.5cm||41900||18K ????????? ??????', val: '15.5cm+2.5cm (+41,900???)'},
        {key: '16.5cm+2.5cm||41900||18K ????????? ??????', val: '16.5cm+2.5cm (+41,900???)'},
        {key: '17.5cm+2.5cm||45900||18K ????????? ??????', val: '15.5cm+2.5cm (+45,900???)'},
        {key: '18.5cm+2.5cm||49900||18K ????????? ??????', val: '15.5cm+2.5cm (+49,900???)'},
        {key: '19.5cm+2.5cm||53900||18K ????????? ??????', val: '15.5cm+2.5cm (+53,900???)'},
    ];
    let none = [
        {key: '',val: '- [??????]????????? ????????? ????????? -'},
        {key: '',val: '------------------------------------------'},
    ]
    if(select1[0] == "14K"){
        switch(select1[1]){
            case '?????????':
                for(let i in jy14K){
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jy14K[i].key);
                    opt.innerText = jy14K[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case '??????':
                for(let i in jp14K){
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jp14K[i].key);
                    opt.innerText = jp14K[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case '?????????':
                for(let i in jw14K){
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jw14K[i].key);
                    opt.innerText = jw14K[i].val;
                    pr2.appendChild(opt);
                }
            break;
        }
    
    }else if(select1[0] == "18K"){
        switch(select1[1]){
            case '?????????':
                for(let i in jy18K){
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jy18K[i].key);
                    opt.innerText = jy18K[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case '??????':
                for(let i in jy18K){
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jp18K[i].key);
                    opt.innerText = jp18K[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case '?????????':
                for(let i in jy18K){
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jw18K[i].key);
                    opt.innerText = jw14K[i].val;
                    pr2.appendChild(opt);
                }
            break;
        }
    }else{
        for(let i in none){
            let opt = document.createElement('option');
            opt.setAttribute('value', none[i].key);
            opt.innerText = none[i].val;
            pr2.appendChild(opt);
        }
    }
}
let sumsum = 0;
function select2(e){
    let val = e.value;
    let vals = val.split("||");
    let prTitle = document.getElementsByClassName("item_title")[0].innerHTML;
    let pprice = document.getElementById("pprice").value;
    let toPrice = document.getElementById('total-price');
    if(vals != ''){
        prTitle = `
            <div class = "vvbox">
                <div class="vbox">
                    <p class="product-title">${prTitle}</p>
                    <span>${vals[2]} / ${vals[0]}</span>
                </div>
                <div class="addbox">
                    
                </div>
                <div class="prbox">
                    ${priceToString(Number(pprice) + Number(vals[1]))} ??? 
                    <p class="point">( <span>P</span> 500??? )</p>
                </div>
            </div>
        `;
        document.getElementById('total').classList.add('total-inner');
        document.getElementById('total').innerHTML += prTitle;
        
        sumsum += Number(pprice) + Number(vals[1]);
        toPrice.innerHTML = priceToString(sumsum) + '???';

        // console.log('?????????'+val[0]);
        // console.log('??????'+val[1]);
        // console.log('??????'+val[2]);
        // let divinn = "<div class='total-inner'></div>";
        // document.getElementById("total").innerHTML = divinn;
    }else{
        document.getElementById('total').innerHTML = '';
        toPrice.innerHTML = 0;
    }
}

function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}