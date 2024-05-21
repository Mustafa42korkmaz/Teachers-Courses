import React from 'react'
import "../css/about.css"

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-container-title'> 
        <h1 className='home-title'>ABOUT US</h1>
        </div>

        <div className='about-card-container'> 
        <div className='about-card'>
            <i className="bi bi-globe-central-south-asia"></i>
            <h4 className='about-h4'>Online Courses</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugit illo soluta laboriosam distinctio harum iusto qui temporibus natus consequatur.
        </div>

        <div className='about-card'>
        <i className="bi bi-book-fill"></i>
            <h4 className='about-h4'>Online Courses</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate incidunt assumenda excepturi! Optio officiis rerum a, repellat veritatis sint porro, distinctio consequuntur, necessitatibus quasi reiciendis blanditiis illum pariatur expedita?
        </div>

        <div className='about-card'>
        <i className="bi bi-headset"></i>
            <h4 className='about-h4'>Online Courses</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugit illo soluta laboriosam distinctio harum iusto qui temporibus natus consequatur.
            </div>
        </div>
    </div>
  )
}

export default About