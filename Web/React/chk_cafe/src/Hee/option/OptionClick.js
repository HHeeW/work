import $ from 'jquery';

//기본 옵션
let menuoption=['name', 'Grande(473ml, 16oz)', '일회용컵'];

export const Count =(sum, count, setCount)=>{
  if(sum === true) return count < 10 ? (setCount(count+1)) : count;
  else             return count >  0 ? (setCount(count-1)) : count;
  
} 

export const Size =(e)=>{
  console.log(e)
  menuoption[1] = `음료 사이즈 : ${e}`; // =========================================================== 1
  $("button#H_Size").click(function(){
    $("button#H_Size").removeClass("H_active");
    $(this).addClass("H_active");
  })
  }
  
export const Cup =(e)=>{
  console.log(e);
  menuoption[2] = `컵 종류 : ${e}`;// =========================================================== 2
  $("button#H_Cup").click(function(){
    $("button#H_Cup").removeClass("H_active");
    $(this).addClass("H_active");
  })
}

export const IceSize =(e)=>{
  console.log(e);
  menuoption[3] = `얼음 종류 : ${e}`;// =========================================================== 3
  $("button#H_Ice_Size").click(function(){
    $("button#H_Ice_Size").removeClass("H_active");
    $(this).addClass("H_active");
  })
}
export const Ice =(e)=>{
  console.log(e);
  menuoption[4] = `얼음 량 : ${e}`;// =========================================================== 4
  $("button#H_Ice").click(function(){
    $("button#H_Ice").removeClass("H_active");
    $(this).addClass("H_active");
  })
}

export const Deca =(e)=>{
  console.log(e);
  menuoption[5] = `디카페인 : ${e}`;// =========================================================== 5
  $("button#H_Deca").click(function(){
    $("button#H_Deca").removeClass("H_active");
    $(this).addClass("H_active");
  })
}
export const Suger =(e)=>{
  console.log(e);
  menuoption[7] = `당도 ${e}`;// =========================================================== 7
  $("button#H_Suger").click(function(){
    $("button#H_Suger").removeClass("H_active");
    $(this).addClass("H_active");
  })
}




export const menuSum=(name,setMenu, count0,count1,count2, count3)=>{
  // 커피
  if(count0 !== 0){
    menuoption[6] = `샷추가 : ${count0}번`;
  }
  if(count3 !== 0){
    menuoption[8] = `펄 추가 : ${count3}번`;
  }
  
  if(count1 !== 0){
    menuoption[9] = `헤이즐넛시럽 : ${count1}번`;
  }
  if(count2 !== 0){
    menuoption[10] = `바닐라시럽 : ${count2}번`;
  }
  menuoption[0] = name;
    console.log([...menuoption])
    setMenu([...menuoption]);
  }