import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const AboutPreviewSection = () => {
  const { isDarkMode } = useTheme()

  return (
    <section className={`section-padding ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-primary'} mb-6`}>
              About <span className={`${isDarkMode ? 'text-white' : 'text-gradient'}`}>Pixdot</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
            At Pixdot, we deliver creative and strategic branding, digital, and business development solutions that drive real results. 
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
            With over 1,000 projects and 500+ satisfied clients, we build brands that inspire trust and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className={`${isDarkMode ? 'bg-gradient-to-tr from-primary to-secondary' : 'bg-gradient-to-tr from-primary to-secondary'} rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-white'}`}>
              <h3 className="text-2xl font-bold mb-6">Why Choose Pixdot?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold">✓</span>
                  </div>
                  <span>Expert team with 10+ years experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold">✓</span>
                  </div>
                  <span>Cutting-edge technology stack</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold">✓</span>
                  </div>
                  <span>24/7 support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold">✓</span>
                  </div>
                  <span>Proven track record of success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreviewSection

