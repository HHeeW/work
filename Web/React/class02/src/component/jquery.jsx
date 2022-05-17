import React from 'react'
import $ from 'jquery'

const jquery = () => {
    const input_alert =(e)=>{
        let input_val = $('#input').val();
        alert(input_val);
    }
  return (
    <div>
        <h2>This id Jquery</h2>
        <input id='inputId' name="inputName" />
        <button id='buttonId' onClick={e=>input_alert(e)}>alert button</button>
    </div>
  )
}

export default jquery