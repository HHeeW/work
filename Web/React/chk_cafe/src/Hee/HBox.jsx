import React, { useState } from 'react'

const HBox = (props) => {

    const [count, setCount] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    const del = ()=>{
        document.getElementById(props.id).remove();
    }
    const counting = (a, b)=>{
        if(a === true){
            if(count[b] < 10) count[b]++
        }else{
            if(count[b] > 1) count[b]--
        }
        setCount([...count])
    }
    let price = props.price * count[props.id];
  return (
    <div className='H_Busket_Box' id = {props.id}>
        <div className='H_Product_Poto'><img src={props.url} alt="" /></div>
        <div className='H_Product_Title'> 
            <div>{props.title}</div>
            <div>{props.desc}</div>
        </div>
        <div className='H_Product_Num'> 
            <button onClick={()=>counting(false, props.id)}>-</button> 
            <span id={props.id}>{count[props.id]}</span> 
            <button onClick={()=>counting(true, props.id)}>+</button>
        </div>
        <div className='H_Product_Price'> {price} </div>
        <div className='H_Product_Cancel'><span onClick={del}> 삭제 </span></div>
    </div>
  )
}

export default HBox