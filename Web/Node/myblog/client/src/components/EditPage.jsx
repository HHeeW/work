import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import BtnNav from './BtnNav.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import dateFormat from 'dateformat';

const PostPage = () => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const nav = useNavigate();
  const v = 0;
  const { id } = useParams();

  useEffect(()=>{
    Axios.get("/api/view/"+id)
    .then((res)=>{
       console.log(res.data);
       const rs = res.data[0];
          setUserName(rs.user_name);
          setTitle(rs.title)
          setText(rs.post_text)
    });
   }, []);

  const submitPost = () => {
     const now = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");

     if(!userPass){
        alert('비밀번호를 입력 하세요.');
        return;
     }
      const post = {
          id: id,
          userName: userName,
          userPass: userPass,
          title: title,
          text: text,
          now: now
      }
      Axios.post('/api/edit', post)
      .then((res)=>{ 
            if(res.data[0].ct == 0){
                alert('비밀번호가 틀렸습니다. 다시 확인하세요.');
                return;
            }else{
                alert('내용을 수정했습니다.');
                nav('/view/'+id);
            }
       })
      .catch((error)=>{
          console.log(error);
      }); 
    console.log(post);   
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
            <textarea onChange={(e)=>{setText(e.target.value)}} value={text}></textarea>
            <br />
            <button type="button" onClick={submitPost}>글쓰기</button>
        </form>

        <BtnNav v={v} id="0" />
    </div>
  )
}

export default PostPage