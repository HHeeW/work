import HPay from './Hee/HPay'
import Test from './Hee/Test'
import './Hee/Hee.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className='H_Flex_Center'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HPay />}/>
            <Route path='/test' element={<Test />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App