import React from 'react'

const Movie_Page_Review = () => {
  return (
    <div className='H_Movie_Page_Review'>
        <div className="H_Review_WriteBox">
            <div className='H_Review_grade'>
                <p>평점</p>
                <div className="H_point">
                   <i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"><i class="fa-regular fa-heart"></i></i></i></i></i></i></i></i></i></i> 
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