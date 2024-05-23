import React from 'react'
import "../css/aws.css"
import { useNavigate } from 'react-router-dom'

const Aws = () => {
  const navigate =useNavigate()

  return (
    <div>
      <div className='devops'>
        <h1>AWS/DevOps Path</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, necessitatibus.</p>
        <img src="https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?w=740&t=st=1714902086~exp=1714902686~hmac=af550090b91de6d5a753fe5ac46dbe8936727973495a29ef44cfa9fddd7fbaa1" />
        <button className='learn-btn' onClick={() => navigate("/contact")}>Learn More</button>
        <p>ReactJS</p>
      </div>
    </div>
  )
}

export default Aws