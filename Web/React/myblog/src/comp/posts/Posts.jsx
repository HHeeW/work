import './posts.css';
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div className='posts'>
        <img src="images/h4.jpg" alt="h4" className="postImg" />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">Travel</span>
              <span className="postCat">Park</span>
            </div>
            <p className="postTitle">
              인생을 보내는 그들은 굳세게 내려온 꽃 아름다우냐? 봄바람을 역사를 끝까지 예수는 아니다. 밥을 목숨을 그러므로 우리 그들을 그것을 공자는 행복스럽고 있다. 
            </p>
            <span className="postDate">1hour ago</span>
        </div>
        <hr />
    </div>
  )
}
