import './home.css'
import Header from "../../comp/header/Header";
import Posts from '../../comp/posts/Posts';
import SideBar from '../../comp/sidebar/Sidebar';

export default function Home() {
  return (
    <>
        <Header />
        <div className="container home">
          <div className="post">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>
          <SideBar />
        </div>
    </>
    )
}
