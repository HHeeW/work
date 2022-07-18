import React, {useState} from 'react'
import Axios from 'axios'
import BtnNav from './BtnNav.jsx'
import { useNavigate } from 'react-router-dom'

const PostPage = () => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const nav = useNavigate();
  const v = 0;
  const submitPost = () => {
      const post = {
          userName: userName,
          usrePass: userPass,
          title: title,
          text: text
      }
      Axios.post('/api/create', post)
      .then((res)=>{ 
        if(res.data.insertId){
           alert('글이 등록 되었습니다.');
           nav('/');
        }
     
       })
      .catch((error)=>{
          console.log(error);
      }); 
      
  }

  return (
    <div>
        <form>
            <label>이름 : </label>
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}} value={userName} />
            <br />

            <label>비밀번호 : </label>
            <input type="text" onChange={(e)=>{setUserPass(e.target.value)}} value={userPass} />
            <br />
            <label>제목 : </label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
            <br />
            <label>내용 : </label>
            <textarea onChange={(e)=>{setText(e.target.value)}}>{text}</textarea>
            <br />
            <button type="button" onClick={submitPost}>글쓰기</button>
        </form>

        <BtnNav v={v} id="0" />
    </div>
  )
}

export default PostPage