import React, { useState } from 'react'
import PopupDom from '../lib/PopupDom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';

const Address = () => {
  //팝업의 상태를 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  //팝업창 열기 
  const toggle =()=>{setModal(!modal);}
  return (
    <>  
    <div className="input-group mb-3">
         <span className="input-group-text"><FontAwesomeIcon icon={faLocationPin} /></span>
         <input type="text" className="form-control" placeholder="주소" />
         <button className="btn btn-success" onClick={openPop}>주소검색</button>
         <input type="text" className="form-control" readonly />
    </div>
    <Modal is Open={modal} toggle={toggle}>
        {
            isPopupOpen && (
                <PopupDom>
                    <PostCode onClose={closePop} />
                </PopupDom>
            )
        }
    </Modal>
    </>
  )
}

export default Address