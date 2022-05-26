import React, { useEffect } from 'react'
import Cookie from 'react-cookie';
const CookieLoad = () => {
    useEffect(()=>{
        setTimeout(function(){
            Cookie.load('userId')
        }, 1000)
    })
  return (
    <div>CookieLoad</div>
  )
}

export default CookieLoad