import React , { useState , useEffect} from 'react'
import Navbar from './components/navbar'
import LoadScreen from './components/loadScreen'
import loadScreeAnimation from './javaScript/main'
import './style.css'

function App() {
    useEffect(()=>{
      loadScreeAnimation();
    })

  return (
    <>
    {/* <LoadScreen></LoadScreen> */}
    <div className='container'>  
      <Navbar></Navbar>
    </div>
    </>
  )
}

export default App
