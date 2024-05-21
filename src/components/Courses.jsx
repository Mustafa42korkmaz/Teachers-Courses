import React from 'react'
import data from "../data.js"
import "../css/course.css"
import { useNavigate } from 'react-router-dom'


const Courses = () => {
  const navigate = useNavigate()


  return (
    <div className='course-container'>
      
      <div className='course-container-title'> 
      <h1 className='home-title'>OUR COURSES</h1>
      </div>

  <div className='card-container'>  
      {data.map((course) => {
        const {img, id, text, name} = course
          return ( 
          <div className='courses-card' 
          key={id}
          >
          <img src={img} alt="" className='course-img'/>
          <div>
            <h4 className='course-name'>{name}</h4>
            <p className='course-text'>{text}</p>
            <button className='course-btn'>Detail</button>
          </div>
        </div>)
        })}
    </div>

    </div>
  )
}

export default Courses