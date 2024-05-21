import React from 'react'
import "../css/paths.css"
import { Link, Outlet } from 'react-router-dom'

const Paths = () => {
  return (
    <div className='paths'>
      <h1 className="paths-title">Online IT Courses to Become a Qualified IT Program</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, inventore alias. Praesentium, ut? Quasi aperiam esse mollitia soluta quae blanditiis? Omnis, quasi rerum, ipsa ipsum distinctio laudantium officia, inventore incidunt a consectetur tempora tempore voluptas!</p>
      <div className='sticks'>
        <Link className='fullstack' to="fullstack" >FullStack</Link>
        <Link className='Aws-Devops' to="aws">Aws-Devops</Link>
      </div>

      <Outlet/>

      

    </div>
  )
}

export default Paths