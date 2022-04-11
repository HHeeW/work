import './topbar.css';

export default function TopBar() {
  return (
    <div className="top">
        <div className="container topIn">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><a href="#">about</a></li>
                    <li className="topListItem"><a href="#">list</a></li>
                    <li className="topListItem"><a href="#">contact</a></li>
                    <li className="topListItem"><a href="#">write</a></li>
                    <li className="topListItem"><a href="#">logout</a></li>
                </ul>
            </div>
            <div className="topRight">
                <img src = "images/profile.png" alt ='홍길동' className='topImg' />
                <i className="fas fa-search"></i>
            </div>
        </div>
    </div>
  )
}
