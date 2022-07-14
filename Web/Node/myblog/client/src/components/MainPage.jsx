import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const MainPage = () => {

  const [postList, setPostList] = useState([]);
 
  useEffect(()=>{
      Axios.get("/api/get")
      .then((res)=>{
         console.log(res.data);
         setPostList(res.data)
      });
  }, []);

  const LikePost = (id) => {
      Axios.post(`api/like/${id}`).then((res)=>{
         if(res.data){
            alert('추가되었습니다.');
         }
      });
  }

  return (
    <div>
        {
            postList.map((rs, key)=>(
                <div className="post" key={key}>
                   <Link to={"/view/"+rs.id}> 
                   <h1 className="post-title">{rs.title}</h1>
                   </Link>
                   <p className="user-name">
                      {rs.user_name} ({rs.date_posted})
                      <span onClick={(()=>LikePost(rs.id))}>Likes: {rs.likes}</span>
                   </p>
                </div>
            ))
        }
    </div>
  )
}

export default MainPage