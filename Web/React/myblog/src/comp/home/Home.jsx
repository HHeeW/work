import './home.css'
import Header from "../header/Header";
import Posts from '../posts/Posts';
import SideBar from '../sidebar/SideBar';

export default function Home() {
  return (
    <>
        <Header />
        <div className="container home">
          <Posts />
          <SideBar />
        </div>
    </>
    )
}
