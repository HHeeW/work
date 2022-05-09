import React from 'react'
import { Link } from 'react-router-dom'

const ListIn = () => {
  return (
    <tr>
        <td className='mobile-hidden text-center'> 1 </td>
        <td>
            <Link to='Read/1'> 제목 부분 </Link>
        </td>
        <td className='text-center'>
            <Link to='read/1'> 홍길동 </Link>
        </td>
        <td className='text-center'>
            <Link to='read/1'> 2022.05.09 </Link>
        </td>
        <td className='text-center'>
            356
        </td>
    </tr>
  )
}

export default ListIn