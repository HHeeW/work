import React from 'react'
import HList from './HList'

const H_Pay = () => {
  return (
    <div className='H_Pay'>
      <div className='H_Product_Box'>
        <div className='H_Product_Poto'> 상 품 사 진 </div>
        <div className='H_Product_Title'> 상 품 이 름 </div>
        <div className='H_Product_Num'> 상 품 수 량 </div>
        <div className='H_Product_Price'> 상 품 가 격 </div>
      </div>
      <HList/>
      <div>주문 가격</div>
    </div>
  )
}

export default H_Pay