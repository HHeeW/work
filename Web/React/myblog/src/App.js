
import TopBar from "./comp/topbar/TopBar";
import Home from "./pages/home/Home";
import Detail from './pages/detail/Detail';
import Write from './pages/form/Write';
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/*" element={<Detail />} />
        <Route path="/write/*" element={<Write />} />
        <Route path="/write/*" element ={(user == 'HeeWon')?<Write /> : <Home />} />
        {/* <Route path="/setting" element={user ? <Home /> : <Setting />} /> */}
        <Route path="/login" element={ user ? <Home /> : <Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;