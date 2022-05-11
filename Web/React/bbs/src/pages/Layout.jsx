import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from '../pages/List'
import Write from '../pages/Write'
import Read from '../pages/Read'
import Logo from '../component/left/Logo'
import Loginform from '../component/left/Loginform'
import Logoutform from '../component/left/Logoutform'

const Layout = () => {
  return (
            <>
                <div className="left">
                    <Logo />
                    <Logoutform />
                </div>
                <div className="contents">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<List />} />
                            <Route path='wirte' element={<Write />} />
                            <Route path='edit/:id' element={<Write />} />
                            <Route path='read/:id' element={<Read />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </>
    )
}

export default Layout