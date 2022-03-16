'use strict';

var nodes = document.querySelector('ul');
console.log(nodes.children)
for(let k = 0; k < nodes.children.length; k++){
    var el = nodes.children[k];
    el.onclick = function(event){
        event.target.style.backgroundColor = 'yellow';
        console.log(k);
    }
}

const sports = '축구';
try{
    sports = '야구';
}catch(e){
    console.log('에러입니다.');
}


/*
var : 재선언과 재할당이 모두 가능               재할당 O  재선언 O

let : 재선언은 불가능 하지만 재할당은 가능       재할당 X  재선언 O

const : 재선언 재할당 둘다 불가능               재할당 X  재선언 X
*/