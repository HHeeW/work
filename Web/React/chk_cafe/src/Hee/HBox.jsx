import React from 'react'

const HBox = (props) => {
    console.log(props)
  return (
    <div className='H_Busket_Box'>
        <div className='H_Product_Poto'><img src="/image/coffee/콜드브루.png" alt="" /></div>
        <div className='H_Product_Title'> prop </div>
        <div className='H_Product_Num'> 상 품 수 량 </div>
        <div className='H_Product_Price'> 5000원 </div>
    </div>
  )
}

export default HBox