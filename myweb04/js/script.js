var ind = 1;

window.addEventListener('scroll',function(){
    let nowScroll = document.scrollingElement.scrollTop;//탑 부터의 스크롤 값 확인
    if(nowScroll > 600){
        document.getElementById("top").style.display = 'flex';
    }
    if(nowScroll == 0){
        document.getElementById("top").style.display = 'none';
    }
    //console.log(nowScroll);
});

function gTime(){
    var dt = new Date();
    var yr = dt.getFullYear();
    var mth = dt.getMonth()+1;
    var gdt = dt.getDate();
    var hour = dt.getHours();
    var minu = dt.getMinutes();
    var sec = dt.getSeconds();
    document.getElementsByClassName('dt')[0].innerHTML = yr+"."+ mth+"."+ gdt + " <span> "+hour+"시 "+minu+"분 "+sec+"초</span>";
    };


function slide(n){
    if(n){
        document.getElementById("slide"+ind).style.display ='none';
        ind++;
        if(ind == 6){ind = 1;}
        document.getElementById("slide"+ind).style.display = "block";
    }
    else{
        document.getElementById("slide"+ind).style.display ='none';
        ind--;
        if(ind == 0){ind = 5;}
        document.getElementById("slide"+ind).style.display = "block";
    }
}
setInterval(autoSlide, 5000);
setInterval(gTime, 500);

function autoSlide(){
    document.getElementById("slide"+ind).style.display ='none';
    ind++;
    if(ind == 6){ind = 1;}
        document.getElementById("slide"+ind).style.display = "block";
}

//json - bestCafe
const bestCafe = document.getElementById("bestCafe");
fetch('./json/cafe.json')
.then(resolve => resolve.json())
.then(rs =>{
    //console.log(rs);
    let cnode = "";
    
    for(let r of rs.list){
        let hashArr = r.hash.split(",");
        let csnode = "";
        for(let i in hashArr){
            csnode += (i == 0)?`<span class = "act">${hashArr[i]}</span>`:`<span>${hashArr[i]}</span>`;
        }
        cnode += `
            <div class="col-4 col-tb-6 py-15">
                <a href="#" class="card">
                    <div class="img-thumb" style="background-image: url(images/${r.img});"></div>
                    <div class="card-contents">
                        <h3>${r.title}</h3>
                        <p class="title-info ellipis">${r.desc}</p>
                        <p class="hash ellipis">
                            ${csnode}
                        </p>
                    </div>
                </a>
            </div>
        `;
    }
    bestCafe.innerHTML = cnode;
})
//json - mainlist
const mainlist = document.getElementById("mainlist");
fetch('./json/mainlist')
.then()

.catch(error=> console.log(error))
