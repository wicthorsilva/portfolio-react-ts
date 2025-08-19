import React, { useState } from 'react'

import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AnimatedCircuitBackground from './components/CircuitBackground/AnimatedCircuitBackground'


function App() {

  return (
    <BrowserRouter>
      <AnimatedCircuitBackground />
      <Navbar />
      <LandingPage />
      <Footer />
    </BrowserRouter>
  )
}

export default App
