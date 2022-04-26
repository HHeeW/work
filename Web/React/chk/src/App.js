import Topnav from './main/Topnav'
import Movie from './movie/Movie'
import Movie_Detail_List from './movie_detail/Movie_Detail_List'
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
        <Route path='/movie_Detail_List1' element ={<Movie_Detail_List />} />
        <Route path='/movie_Detail_List2' element ={<Movie_Detail_List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App