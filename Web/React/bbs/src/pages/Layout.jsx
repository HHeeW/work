import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from '../pages/List'
import Write from '../pages/Write'
import Read from '../pages/Read'

const Layout = () => {
  return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3 col-12">
                    로고<br />
                    로그인 <br />
                </div>
                <div className="col-lg-9 col-12">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<List />} />
                            <Route path='wirte' element={<Write />} />
                            <Route path='edit/:id' element={<Write />} />
                            <Route path='read/:id' element={<Read />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
}

export default Layout