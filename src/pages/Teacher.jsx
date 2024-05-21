import React, { useEffect, useState } from 'react'
import "../css/teacher.css"
import { useNavigate } from 'react-router-dom'

const Teacher = () => {
  const [teachers, setTeachers] = useState([])
  const navigate = useNavigate()

  const getTeachers = async () => {
      const res = await fetch("https://reqres.in/api/users")
      const data = await res.json()
      setTeachers(data.data)
  }

  useEffect(() => {
    getTeachers()
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className='teacher-container'>
      <h1 className='teacher-container-title'>TEACHER LIST</h1>
    
    <div className='teachers-card'>  
      {teachers?.map((teacher) => {
        const {avatar, first_name, last_name, id} = teacher
        return (
        <div className='teacher' key={id} onClick={() => navigate(`${id}`)}>
        <img src={avatar} alt="" className='teacher-img'/>
        <h5 className='teacher-name'>{first_name} {last_name}</h5>
      </div>)
      })}
      </div>
    </div>
  )
}

export default Teacher