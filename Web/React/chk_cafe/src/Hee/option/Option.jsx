import React, { useState } from 'react'
import '../Hee.css'
import OptionKinds from './OptionKinds';
import * as Click from './OptionClick.js';
import OptionBasic from './OptionBasic';

const Option = () => {
  const[kinds, setKinds] = useState('icecoffee');
  
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
        <OptionBasic />
        <OptionKinds kinds={kinds} />
      </div>
      <div className='H_Option_Shopping_Basket'>
        <button onClick={Click.menuSum}> 장바구니 버튼 </button> 
        <button onClick={Click.menuSum}> 바로구매 버튼</button> 
      </div>
    </div>
  )
}

export default Option