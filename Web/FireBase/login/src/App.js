import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Account from './components/Account'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { AuthContextProvider } from './context/AuthContext'
import ProtecteRouter from './ProtecteRouter'

const App = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-20'>
        <h1 className='text-center text-3xl font-bold'>
          FireBase Auth 사용 로그인 연습
        </h1>
        <img className='h-16 mx-5' src='https://firebasestorage.googleapis.com/v0/b/myapp-e8099.appspot.com/o/files%2FHHW-%5BRecovered%5D.png?alt=media&token=272de17d-f98e-49e2-b077-13def498eef7' alt='logo'/>
      </div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/account' element={<ProtecteRouter><Account/></ProtecteRouter>} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App