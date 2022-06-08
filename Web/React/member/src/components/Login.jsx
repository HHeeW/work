import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [userId, setUserId] = useState('')
    const [userPass, setUserPass] = useState('')

    const onSubmit = () => {
        console.log('아이디 : ' + userId)
        console.log('비밀번호 : ' + userPass)
    }

    const handleId = (e)=>{
        setUserId(e.target.value)
    }
    const handlePass = (e)=>{
        setUserPass(e.target.value)
    }

  return (
    <div>
        <h2> LOGIN </h2>
        <div>
            <label> ID: </label>
            <input type={"text"} name={"userid"} value={userId} onChange={handleId} />
        </div>
        <div>
            <label> PASSWORD: </label>
            <input type={'password'} name={"userpass"} value={userPass} onChange={handlePass} />
        </div>
        <div>
            <button type='button' onClick={onSubmit}> LOGIN </button>
        </div>
    </div>
  )
}

export default Login