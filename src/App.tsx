import React, { useState } from 'react'

import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AnimatedCircuitBackground from './components/Decor/CircuitBackground'



function App() {

  return (
    <BrowserRouter>
      <AnimatedCircuitBackground accent="#79c0ff" opacity={0.35} />
      <Navbar />
      <LandingPage />
      <Footer />
    </BrowserRouter>
  )
}

export default App
