import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

const FbLogin = () => {
  return (
    <button className="btn btn-block btn-facebook mt-2" style={{width:'100%'}}>
         <FontAwesomeIcon icon={faFacebook} />
    </button>     
  )
}

export default FbLogin