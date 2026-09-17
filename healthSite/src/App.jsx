import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import MainServicesPage from './Component/MainServicesPage';
import About from './Component/About';
import MainContactUsPage from './Component/MainContactUsPage';
import Blog from './Component/Blog';
import Stories from './Component/Stories';
import FaqsPage from './Component/FaqsPage';
import PrivacyPolicy from './Component/PrivacyPolicy';
import DemoSlide from './Component/DemoSlide';

// Global ScrollToTop on route and hash changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />   
        <Route path="/services" element={<MainServicesPage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<MainContactUsPage />} />  
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/demo" element={<DemoSlide />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
