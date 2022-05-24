import React, { useState } from 'react'
import '../Hee.css'
import OptionKinds from './OptionKinds';
import * as Click from './OptionClick.js';
import OptionBasic from './OptionBasic';
import Swal from 'sweetalert2'

const Option = (props) => {
  // const[kinds, setKinds] = useState('icecoffee');
  const kinds = 'icecoffee';

  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  const viewALert = (positionflag, e)=>{
    Click.menuSum('props.name' , props.setMenu, count0,count1,count2)
    Swal.fire({
        position: positionflag,
        icon: 'success',
        title: '장바구니에 담았습니다.',
        showConfirmButton: false,
        timer: 1000
      })
  }

  return (
      <div className="H_Container">
        <div className="H_Menu_Box">
          <div className="H_Menu_Img">
            <img src="/image/coffee/콜드브루.png" alt="콜드브루" />
          </div>
          <div className="H_Menu_Info">
            <div className="H_Menu_Name">
              <h1>콜드브루</h1>
            </div>
            <div className="H_Menu_Detail">
              <h3>상품 설명</h3>
            </div>
          </div>
        </div>
        <div className="H_Option_Box">
          <OptionBasic />
          <OptionKinds kinds={kinds} 
            count0 = {count0} count1={count1} count2={count2} 
            setCount0 = {setCount0} setCount1={setCount1} setCount2={setCount2}/>
        </div>
        <div className='H_Option_Shopping_Basket'>
          <button onClick={(e)=>{viewALert('bottom-right')}}> 장바구니 버튼 </button>
        </div>
      </div>
  )
}

export default Option