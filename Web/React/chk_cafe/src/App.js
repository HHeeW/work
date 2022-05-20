import React, { useState } from 'react'
import BasketSub from './Hee/basket/BasketSub'
import Option from './Hee/option/Option'

const App = () => {
  let [menu, setMenu] = useState([]);
  return (
    <div className='H_Flex_Center'>
        <Option setMenu={setMenu}/>
        <BasketSub menu={menu}/>
    </div>
  )
}

export default App