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
        <Route path='/movie_detail_List1' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List2' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List3' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List4' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List5' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List6' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List7' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List8' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List9' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List10' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List11' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List12' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List13' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List14' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List15' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List16' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List17' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List18' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List19' element ={<Movie_Detail_List />} />
        <Route path='/movie_detail_List20' element ={<Movie_Detail_List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App