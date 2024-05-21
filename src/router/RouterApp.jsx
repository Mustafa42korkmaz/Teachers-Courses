import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import Paths from '../pages/Paths'
import Teacher from '../pages/Teacher'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Private from './Private'
import TeacherDetail from '../pages/TeacherDetail'
import Footer from '../components/Footer'
import FullStack from '../pages/FullStack'
import Aws from '../pages/Aws'


const RouterApp = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/teacher' element={<Teacher/>}/>
            <Route path='/teacher/:id' element={<TeacherDetail/>}/>
          
          <Route path='/contact' element={<Private/>}>
            <Route path='' element={<Contact/>}/>
          </Route>  

        <Route path='/paths' element={<Paths/>}>
          <Route index element={<FullStack/>} />
           <Route path='fullstack' element={<FullStack/>} />
           <Route path='aws' element={<Aws/>} />
        </Route>
          
          <Route path='*' element={<NotFound/>}/>

          </Routes>
          <Footer/>  
        
        </BrowserRouter>
    </div>
  )
}

export default RouterApp