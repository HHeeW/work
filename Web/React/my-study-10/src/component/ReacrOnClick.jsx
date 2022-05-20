import React from 'react'

const ReacrOnClick = () => {
    const thisClick = (param) =>{
        if(typeof param != 'string')param = "Click a";
        console.log('param: ' + param)
    }
  return (
    <div>
        <button onClick={e=>thisClick('Click Button')}>Click Button</button>
        <div onClick={e => thisClick('ClickDiv')}>Click Div</div>
        <a href='#' onClick={thisClick}>Click a</a>
    </div>
  )
}

export default ReacrOnClick