import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

const TWLogin = () => {
    return (
        <button className="btn btn-block btn-twitter mt-2" style={{width:'100%'}}>
             <FontAwesomeIcon icon={faTwitter} />
        </button>     
      )
}

export default TWLogin