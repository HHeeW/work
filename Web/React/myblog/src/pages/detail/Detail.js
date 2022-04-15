import'./detail.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import Single from '../../comp/singlepost/SinglePost'
export default function Ditail() {
  return (
        <div className='detail container'>
            {/*detail*/}
            <Single />
            <Sidebar />
        </div>
  )
}
