import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './Component/Footer';
import MainContactUsPage from './Component/MainContactUsPage';
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import MainServicesPage from './Component/MainServicesPage';
import About from './Component/About';
import DemoSlide from './Component/DemoSlide';
// import Context from './CreateContext/Context';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<MainContactUsPage />} />  
        <Route path="/services" element={<MainServicesPage />} />
        <Route path="/about" element={<About />} />   
        <Route path="/demo" element={<DemoSlide />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
