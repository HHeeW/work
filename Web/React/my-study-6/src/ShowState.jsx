import React, { useMemo } from 'react'

const getNumber=(number)=>{
    console.log("숫자가 변경되었음");
    return number;
}
const getText = (text) =>{
    console.log("글씨가 변동되었음");
    return text;
}
const ShowState = ({number, text}) => {
    const ShowNumber = useMemo(()=> getNumber(number), [number]);
    const Showtext = useMemo(()=> getText(text), [text])
  return (
    <div>
        {ShowNumber}
        {Showtext}
        <br />
    </div>
  )
}

export default ShowState