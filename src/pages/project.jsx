import React from 'react'
import { useNavigate } from 'react-router-dom'

function Project() {
    const navigate = useNavigate()

  return (
    <div>
        <h1>Project</h1>
        <button onClick={() => navigate('/contact')}>contact</button>
        <button onClick={() => navigate('/')}>About</button>
    </div>
  )
}

export default Project