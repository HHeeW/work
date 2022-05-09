import React from 'react'

const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
        <span style={{
            textDecoration: isHere ? 'none' : 'line-through',
            color: isHere ? 'black' : 'gray',
            backgroundColor: isHere ? 'white' : '#ededed',
            cursor:'pointer'
        }}
        onClick={()=>{
            dispatch({type: 'mark-student', payload: {id}})
        }}> { name } </span>
        <button onClick={()=>{
            dispatch({ type: 'delete-student', payload: {id}})
        }}> 삭제 </button> 
    </div>
  )
}

export default Student