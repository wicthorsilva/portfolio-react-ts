import React, { useState } from 'react'

import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <LandingPage />
      <Footer />
    </BrowserRouter>
  )
}

export default App
