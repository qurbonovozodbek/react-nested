import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Project from './pages/project'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = { <Home> </Home> }>
          <Route index element = { <About></About> }></Route>
          <Route path='/contact' element = { <Contact></Contact> }></Route>
          <Route path='/project' element = { <Project></Project> }></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
