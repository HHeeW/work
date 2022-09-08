import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Account = () => {

  const { user, logout } =UserAuth();
  const nav = useNavigate();

  const handleLogOut = async() => {
    try{
      await logout();
      alert('로그아웃 되었습니다~')
      nav('/')
    }catch(e){
      console.log(e.message)
    }
  }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
        <h1 className='text-2xl font-bold py-4'>Account</h1>
        <p>User Email : {user && user.email} </p>

        <button className='border px-6 py-2 my-4' onClick={handleLogOut}>로그아웃</button>
    </div>
  )
}

export default Account