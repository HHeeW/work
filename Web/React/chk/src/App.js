import Topnav from './main/Topnav'
import Movie from './movie/Movie'
import Movie_Detail from './movie_detail/Movie_Detail'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/movie_detail' element ={<Movie_Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App