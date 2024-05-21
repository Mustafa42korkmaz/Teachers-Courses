import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from './NotFound'
import logoGif from "../assets/loading (1).gif"
import "../css/teacDetail.css"

const TeacherDetail = () => {
  const {id} = useParams()

  const [person, setPerson] = useState({})
  const [loading ,setLoading] = useState(true)
  const [error ,setError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      if(!res.ok){
        setError(true)
        setLoading(false)
        throw new Error ("Teacher can not found")
      }
      return res.json()
    })
    .then((data) => {
      setLoading(false)
      setPerson(data.data)
    })
    .catch((error) => {console.log(error)})
   
  }, [])

  
  if (error) {
    return <NotFound/>

  }else if (loading){
    <div className='loading-gif'>
      <img src={logoGif} alt="" />
    </div>

  }else {
    return (
      <div className='teac-detail-container'>
        <h3>{person.first_name} {person.last}</h3>
        <img src={person.avatar} className='detail-img' />
        <p className='teacher-email'>{person.email}</p>
        <div className='detail-btns'> 
        <button className='green-btn' onClick={() => navigate("/")}>Go home</button>
        <button className='yellow-btn' onClick={() => navigate(-1)}>Go back</button>
      </div>
      </div>
    )
  }

  
}

export default TeacherDetail
