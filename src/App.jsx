import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'




function App() {
          

  return (
    <>
      <div className="grid">
        <div className="register">  <Register /></div>
        <div className="login" style={{borderLeft:"5px solid black"}}>  <Login /></div>

      </div>

    </>
  )
}

export default App
