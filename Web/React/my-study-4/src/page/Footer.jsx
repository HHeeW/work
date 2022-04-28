import React from 'react'

const Footer = ({isDark, setIsDark}) => {
  return (
    <footer className='footer'
        style={{backgroundColor: isDark ? `black` :'lightgray',
                color: isDark ? 'white' : 'black'}}>
        <button className='button'>
            ModeChange
        </button>
        
    </footer>
  )
}

export default Footer