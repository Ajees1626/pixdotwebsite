import React, { useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import IndustriesSection from '../components/IndustriesSection'
import ReviewsSection from '../components/ReviewsSection'
import AboutPreviewSection from '../components/AboutPreviewSection'
import CaseStudyPreviewSection from '../components/CaseStudyPreviewSection'
import ClientLogosSection from '../components/ClientLogosSection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'

const Home = () => {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <IndustriesSection />
        <ReviewsSection />
        <AboutPreviewSection />
        <CaseStudyPreviewSection />
        <ClientLogosSection />
        <StatsSection />
        <CTASection />
      </div>
    </div>
  )
}

export default Home
