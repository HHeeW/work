import React from 'react'

const Contents = ({isDark}) => {
  return (
    <div className='Content' style={{backgroundColor: isDark ? '#444' : 'white',
    color: isDark ? 'white' : 'black'}}>
        <p>홍길동님, 환영합니다.</p>    
    </div>
  )
}

export default Contents