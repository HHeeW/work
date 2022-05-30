import React from 'react'
import './basket.css'

let menu = [];
const ShoppingBasket = (props) => {
  for(let i of props.menu){
    if(i !== undefined){
      console.log(i);
      menu.push(i + " | ");
    }
  }
  menu.push(<br/>)

  return (
    <div className="H_full_Container">
        <div className="H_basket_Box">
          <div className="H_basket_Img">
            <img src="/image/coffee/콜드브루.png" alt="콜드브루" />
          </div>
          <div className="H_basket_Info">
            <div className="H_Menu_Name">
              <h1>{props.menu[0]}</h1>
            </div>
            <div className="H_Menu_Detail">
              <p>{menu}</p>
            </div>
          </div>
        </div>
        <button>결재하기</button>
    </div>
  )
}

export default ShoppingBasket