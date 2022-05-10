import Movie from './movie/Movie'
import Movie_Page_List from './movie_detail/Movie_Page_List'
import {
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './main/ScrollToTop';
import Benner from './main/Benner';


function App() {
  return (
    <>
    <ScrollToTop />
      <Benner />
    <Routes>
      <Route path='/' element={<Movie />} />
      <Route path='/Movie_Page_List/*' element ={<Movie_Page_List />} />
    </Routes>
    </>
  )
}

export default App