import $ from 'jquery';

let menuoption=['name', 'Grande(473ml, 16oz)', '일회용컵', '각얼음', '보통', 'NO'];
//기본 옵션
export const Size =(e)=>{
  console.log(e)
  menuoption[1] = e; // =========================================================== 1
  $("button#H_Size").click(function(){
    $("button#H_Size").removeClass("H_active");
    $(this).addClass("H_active");
  })
  }
export const Cup =(e)=>{
  console.log(e);
  menuoption[2] = e;// =========================================================== 2
  $("button#H_Cup").click(function(){
    $("button#H_Cup").removeClass("H_active");
    $(this).addClass("H_active");
  })
}
//커피
// 아이스커피
export const IceSize =(e)=>{
  console.log(e);
  menuoption[3] = e;// =========================================================== 3
  $("button#H_Ice_Size").click(function(){
    $("button#H_Ice_Size").removeClass("H_active");
    $(this).addClass("H_active");
  })
}
export const Ice =(e)=>{
  console.log(e);
  menuoption[4] = e;// =========================================================== 4
  $("button#H_Ice").click(function(){
    $("button#H_Ice").removeClass("H_active");
    $(this).addClass("H_active");
  })
}

export const Deca =(e)=>{
  console.log(e);
  menuoption[5] = e;// =========================================================== 5
  $("button#H_Deca").click(function(){
    $("button#H_Deca").removeClass("H_active");
    $(this).addClass("H_active");
  })
}




















export const menuSum=(menu, setMenu)=>{
    console.log(menuoption);
    menu = [];
    menu.push([menuoption])
    setMenu(menu)
  }