import React, { useEffect } from 'react'
import Cookie from 'react-cookie';
const CookiesSave = () => {
    useEffect(()=>{
        const expries = new Date();
        expries.setMinutes(expries.getMinutes()+60)
        Cookie.save('userId', "React",{
            path:'/',
            expries
        })
        setTimeout(function(){
            alert(Cookie.load('userId'))
        }, 1000)
        setTimeout(function(){
            Cookie.remove('userId', {path})
        },1500)
        setTimeout(function(){

        },2000)
    },[]);
    
  return (
    <div>CookiesSave</div>
  )
}

export default CookiesSave