import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './Component/Footer';
import MainContactUsPage from './Component/MainContactUsPage';
import Home from './Component/Home'
import Navbar from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 wrapped Home correctly */}
        <Route path="/contact" element={<MainContactUsPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
