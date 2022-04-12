import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="images/h1.jpg" alt="h1" />
            <p>
                사랑의 이상을 가는 보라. 쓸쓸한 튼튼하며, 내는 돋고, 운다. 있으며, 가는 얼마나 과실이 이 사막이다. 있는 그들의 기쁘며, 그러므로 커다란 하였으며, 얼마나 무한한 대중을 뿐이다.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                CATAGORIES
            </span>
            <ul className="sidebarList">
              <li className="slidebarListItem">Travel</li>
              <li className="slidebarListItem">Park</li>
              <li className="slidebarListItem">Town</li>
              <li className="slidebarListItem">Play</li>
              <li className="slidebarListItem">Train</li>
              <li className="slidebarListItem">View</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                TAG
            </span>
            <div className="tagList">
              <span className="tagListItem">여행</span>
              <span className="tagListItem">공원</span>
              <span className="tagListItem">도심</span>
              <span className="tagListItem">놀거리</span>
              <span className="tagListItem">교통</span>
              <span className="tagListItem">볼거리</span>
              <span className="tagListItem">떠나요</span>
              <span className="tagListItem">둘이서</span>
              <span className="tagListItem">모든걸</span>
              <span className="tagListItem">훌훌</span>
              <span className="tagListItem">버리고</span>
              <span className="tagListItem">제주도</span>
            </div>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                FOLLOW ME
            </span>
            <div className="socialList">
                <i className="socialItem fa-brands fa-facebook-square"></i>
                <i className="socialItem fa-brands fa-twitter-square"></i>
                <i className="socialItem fa-brands fa-pinterest-square"></i>
                <i className="socialItem fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
