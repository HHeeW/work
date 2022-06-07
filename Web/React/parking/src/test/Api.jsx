import React, { useEffect } from 'react'
import axios from 'axios'

const Api = () => {
    const callApi = async () => {
        axios.get("/api").then((res)=> console.log(res));
    };
    
    useEffect(()=> {
        callApi();
    },[])
  return (
    <div>Api</div>
  )
}

export default Api