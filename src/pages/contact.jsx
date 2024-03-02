import React from 'react'
import { useNavigate } from 'react-router-dom'


function Contact() {
    const navigate = useNavigate()

  return (
    <div>
        <h1>Contact</h1>
        <button onClick={() => navigate('/project')}>project</button>
        <button onClick={() => navigate('/')}>about</button>
    </div>
  )
}

export default Contact