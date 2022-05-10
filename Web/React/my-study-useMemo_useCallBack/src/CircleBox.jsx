import React, { useEffect, useState } from 'react'

const CircleBox = ({circleSizer}) => {
    const[sizes, setSizes] = useState([]);
    useEffect (()=>{
        setSizes(circleSizer);
        console.log(circleSizer)
    }, [circleSizer])
    if(sizes !== 0){
        return (
            sizes.map(size => 
                <div className='mtCircle'
                    style={{width:size+'px', height: size+'px'}}
                    key={size}>
                        {size}
                </div>
            )
        )
    }
}

export default CircleBox