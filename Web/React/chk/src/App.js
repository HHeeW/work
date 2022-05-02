import Topnav from './H_Movie/main/Topnav'
import H_Movie from './H_Movie/H_Movie'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <H_Movie />
    </BrowserRouter>
  )
}

export default App