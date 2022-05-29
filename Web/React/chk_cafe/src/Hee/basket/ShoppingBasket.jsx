import React from 'react'
import './basket.css'
const ShoppingBasket = (props) => {
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
              <p>음료 사이즈 : {props.menu[1]}</p>
              <p>컵 종류 : {props.menu[2]}</p>
              <p>얼음 종류 : {props.menu[3]}</p>
              <p>얼음 량 : {props.menu[4]}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShoppingBasket