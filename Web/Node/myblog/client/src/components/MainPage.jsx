import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import BtnNav from './BtnNav.jsx'

const MainPage = () => {

  const [postList, setPostList] = useState([]);
//   const [tab, setTab] = useState('curr');

//   const setDealTab = (s) => {
//       setTab(s);
//   }

  const v = 0;

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

        {/* <div 
         className={`btn ${tab === 'curr' ? 'active' : ''}`} 
         onClick={()=>setDealTab('curr')}>
            메뉴
        </div>
        <div className={`btn ${tab === 'prev' ? 'active': ''}`}
        onClick={()=>setDealTab('prev')}>
            메뉴2
         </div> */}
         <BtnNav v={v} id="0"/>
    </div>
  )
}

export default MainPage