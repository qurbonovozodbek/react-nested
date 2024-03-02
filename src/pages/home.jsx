import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <header>
            <h1>Sidebar</h1>
        </header>
        <Outlet></Outlet>
        <footer>
            <h4>footer</h4>
        </footer>
    </>
  )
}

export default Home