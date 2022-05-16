import React from 'react'
import Address from '../component/Address'
import { useInput } from '../lib/lib'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
const Register = () => {
  return (
    <div className='RWrapper'>
        <h2 className='text-center mb-5'>회원가입</h2>
        <div className="input-group mb-3">
            <span className="input-group-text"><FontAwesomeIcon icon={faUser}/> </span>
            <input type="text" className='form-control' placeholder='이름' />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope}/> </span>
            <input type="text" className='form-control' placeholder='이메일' />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text"><FontAwesomeIcon icon={faLock}/> </span>
            <input type="text" className='form-control' placeholder='비밀번호' />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text"><FontAwesomeIcon icon={faLock}/> </span>
            <input type="text" className='form-control' placeholder='비밀번호확인' />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text"><FontAwesomeIcon icon={faPhone}/> </span>
            <input type="text" className='form-control' placeholder='전화번호' />
        </div>
        <Address />
    </div>
  )
}

export default Register