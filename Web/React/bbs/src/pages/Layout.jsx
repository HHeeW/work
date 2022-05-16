import { Routes, Route } from 'react-router-dom'
import List from '../pages/List'
import Write from '../pages/Write'
import Read from '../pages/Read'
import Logo from '../component/left/Logo'
import Loginform from '../component/left/Loginform'
import Logoutform from '../component/left/Logoutform'
import { useState } from 'react'
import Register from './Register'

const Layout = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
  return (
            <>
                <div className="left">
                    <Logo />
                    {isLoggedIn ? <Logoutform setIsLoggedIn = {setIsLoggedIn} /> : <Loginform setIsLoggedIn = {setIsLoggedIn}/>}
                </div>
                <div className="contents">
                        <Routes>
                            <Route path='/' element={<List />} />
                            <Route path='wirte' element={<Write />} />
                            <Route path='edit/:id' element={<Write />} />
                            <Route path='read/:id' element={<Read />} />
                            <Route path='register' element={<Register />} />
                        </Routes>
                </div>
            </>
    )
}

export default Layout