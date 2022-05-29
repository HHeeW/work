import React, { useState } from 'react'
import Option from './Hee/option/Option'
import ShoppingBasket from './Hee/basket/ShoppingBasket'

import './Hee/Hee.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  let [menu, setMenu] = useState([]);
  return (
    <div className='H_Flex_Center'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Option setMenu={setMenu} menu={menu}/>}/>
            <Route path='/basket' element={<ShoppingBasket menu={menu}/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App