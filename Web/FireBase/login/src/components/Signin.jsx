import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signin } = UserAuth();
    const nav = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('');
        try{
            await signin(email, password);
            nav('/account')
        }catch(e){
            alert('아이디가 존재하지 않거나 틀렸습니다.')
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className='max-w-[700px] max-auto my-16 mx-auto p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
                로그인
            </h1>
            <p className='py-2'>
                아직 회원에 가입하지 않으셨나요? <Link to='/signup' className='underline'>가입</Link>하세요.
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input type={'email'} className="border p-3" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input type={'password'} className="border p-3" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button className='border border-blue-500 bg-blue-600 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign In</button>
        </form>
    </div>
  )
}

export default Signin