import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BtnNav = ({v, id}) => {
  const nav = useNavigate();
  const goList = ()=> {
     nav('/');
  }
  const goPost = ()=>{
    nav('/post');
  }

  return (
    <div>
        <button onClick={goList}>목록보기</button>
        {v === 1 && <Link to={"/edit/"+id}><button>수정</button></Link>}
        {v === 1 && <Link to={"/del/"+id}><button>삭제</button></Link>}
        <button onClick={goPost}>쓰기</button>
    </div>
  )
}

export default BtnNav