import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {
    const navigate = useNavigate()

  return (
    <div>
        <h1>About</h1>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/project')}>Project</button>

    </div>
  )
}

export default About