import { faHome } from '@fortawesome/free-solid-svg-icons'
import PopupDom from '../lib/PopupDom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Address = () => {
    //팝업의 상태를 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    //팝업창 열기
    const openPop = ()=>{
        setIsPopupOpen(true);
    }
    const closePop = ()=>{
        setIsPopupOpen(false);
    }
  return (
      <>
        <div className="input-group mb-3">
            <span className="input-group-text"><FontAwesomeIcon icon={faHome}/> </span>
            <button className='btn btn-success' onClick={openPop}>주소검색</button>
            <input type="text" className='form-control' readOnly />
            <input type="text" className='form-control' placeholder='상세주소' style={{width:'10px'}} />
        </div>
        <div id="popupDom">
            {
                isPopupOpen &&(
                    <PopupDom>
                        <PostCode onClose={closePop} />
                        <button onClick={closePop}>닫기</button>
                    </PopupDom>
                )
            }
        </div>
    </>
  )
}

export default Address