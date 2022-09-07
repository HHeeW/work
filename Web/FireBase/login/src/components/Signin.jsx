import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='max-w-[700px] max-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
                로그인
            </h1>
            <p className='py-2'>
                아직 회원에 가입하지 않으셨나요? <Link to='/signup' className='underline'>가입</Link>하세요.
            </p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input  type={'email'} className="border p-3"/>
            </div>
            <div>
                <label className='py-2 font-medium'>Password</label>
                <input  type={'password'} className="border p-3"/>
            </div>
            <button className='border border-blue-500 bg-blue-600 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signin