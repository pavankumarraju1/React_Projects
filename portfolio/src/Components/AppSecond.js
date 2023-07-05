import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Details from './Pages/PersonalDetails'
import EduDetails from './Pages/EduDetails'
import Skills from './Pages/Skills'
import ProjectsDone from './Pages/ProjectsDone'
import Login from './Pages/Login'

const AppSecond = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/personal-details' element={<Details/>}/>
              <Route path='/edu-details' element={<EduDetails/>}/>
              <Route path='/skills' element={<Skills/>}/>
              <Route path='/projects' element={<ProjectsDone/>}/>
        </Routes>
    </Router>
  )
}

export default AppSecond