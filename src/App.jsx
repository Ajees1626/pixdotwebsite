import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppWidget from './components/WhatsAppWidget'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'
import Industrie from './pages/Industrie'
import IndustryDetail from './pages/IndustryDetail'
import Solutions from './pages/Solutions'
import CaseStudy from './pages/CaseStudy'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Contact from './pages/Contact'
import Project from './pages/Project'
import ProjectsDetail from './pages/ProjectsDetail'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Show loading screen on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('pixdot-visited')
    if (hasVisited) {
      setIsLoading(false)
    } else {
      localStorage.setItem('pixdot-visited', 'true')
    }
  }, [5000])

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 font-sans transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/industrie" element={<Industrie />} />
              <Route path="/industrie/:id" element={<IndustryDetail />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/casestudy" element={<CaseStudy />} />
              <Route path="/casestudy/:id" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/projects/:categoryId" element={<ProjectsDetail />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppWidget />
          {/* <ChatWidget /> */}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
