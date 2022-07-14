import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

const ViewPage = () => {
  const { id } = useParams();
  const [postView, setPostView] = useState({
    id: '', 
    likes: '',
    title:'',
    post_text: '',
    user_name: '',
    date_posted:''
  });

  useEffect(()=>{
      Axios.get("/api/view/"+id)
      .then((res)=>{
         console.log(res.data);
         const rs = res.data[0];
         setPostView({
            id: rs.id,
            likes: rs.likes,
            title: rs.title,
            post_text: rs.post_text,
            user_name: rs.user_name,
            date_posted: rs.date_posted
         })
      });
  }, []);

//   const LikePost = (id) => {
//       Axios.post(`api/like/${id}`).then((res)=>{
//          if(res.data){
//             alert('추가되었습니다.');
//          }
//       });
//   }
  console.log("파라미터: "+id);
  return (
    <div>
       <h3>{postView.title}</h3>
       <p>{postView.post_text}</p>
    </div>
  )
}

export default ViewPage