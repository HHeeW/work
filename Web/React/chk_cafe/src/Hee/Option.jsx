import React from 'react'
import './Hee.css'
const Option = () => {
  return (
    <div className='H_Container'>
      <div className="H_Menu_Box">
        <div className="H_Menu_Img">
          사진
        </div>
        <div className="H_Menu_Info">
          <div className="H_Menu_Name">
            상품 이름
          </div>
          <div className="H_Menu_Detail">
            상품 설명
          </div>
        </div>
      </div>
      <div className="H_Option_Box">
        <div className="H_Option_Coffee">
          옵션1
        </div>
        <div className="H_Option_Coffee">
          옵션2
        </div>
        <div className="H_Option_Coffee">
          옵션3
        </div>
        <div className="H_Option_Coffee">
          옵션4
        </div>
      </div>
      <div className='H_Option_Shopping_Basket'>
        <button>장바구니 담기 버튼</button> 
      </div>
    </div>
  )
}

export default Option