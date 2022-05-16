import React, { useState } from 'react'

const Movie_Page_Review = () => {
  const [Heart, setHeart] = useState(false);
  const [grade, setGrade] = useState(0);
    const HeartClick = (e) => {
      setHeart(!Heart)
      Heart ? e.target.className = "fa-regular fa-heart H_Heart_active" :
              e.target.className = "fa-regular fa-heart";
    }
  return (
    <div className='H_Movie_Page_Review'>
        <div className="H_Review_WriteBox">
            <div className='H_Review_grade'>
                <p> {grade} 평점 </p>
                <div className="H_point">
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={1}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={2}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={3}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={4}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={5}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={6}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={7}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={8}>
                   <i class="fa-regular fa-heart" onClick={HeartClick} id={9}>
                   <i class="fa-regular fa-heart" onClick={(e)=>{}} id={10}>
                   </i></i></i></i></i></i></i></i></i></i> 
                </div>
            </div>
            <textarea type="text" className='H_Review_Text' cols={30} rows={3} maxLength={110} required
                placeholder="평점과 영화 평가를 남겨주세요. &#13;&#10; 주제와 무관한 리뷰 또는 스포일러는 제한 또는 삭제될 수 있습니다."
            />
        </div>
    </div>
  )
}

export default Movie_Page_Review